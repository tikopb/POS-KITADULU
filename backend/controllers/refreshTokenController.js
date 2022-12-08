const jwt = require("jsonwebtoken");
const { refreshToken, Users } = require("../models");
require("dotenv").config();

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt)
    return res.status(401).json({
      message: "unauthorized",
      code: "401",
    });

  const refreshTokenData = cookies.jwt;

  res.clearCookie("jwt", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  const userFound = await refreshToken.findOne({
    where: { refreshToken: refreshTokenData },
  });

  if (!userFound) {
    jwt.verify(
      refreshTokenData,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err)
          return res.status(403).json({
            message: "unauthorized",
            code: "403",
          });

        // delete all refresh token store on db
        await refreshToken.destroy({ where: { userId: decoded.user.userId } });
      },
    );
  }

  jwt.verify(
    refreshTokenData,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      console.log(decoded);
      const payload = {
        user: {
          userId: decoded.user.userId,
          email: decoded.user.email,
          username: decoded.user.username,
          name: decoded.user.name,
          orgId: decoded.user.orgId,
          roleId: decoded.user.roleId,
          clientId: decoded.user.clientId,
        },
      };

      if (err) {
        // expired refresh token
        await refreshToken.destroy({
          where: {
            userId: decoded.user.userId,
            refreshToken: refreshTokenData,
          },
        });
      }

      if (err || userFound?.userId !== decoded.user.userId) {
        return res.status(403).json({
          message: "token / user not same",
          code: "403",
        });
      }

      const newAccessToken = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "60s",
        },
      );

      const newRefreshToken = jwt.sign(
        payload,
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "1d",
        },
      );

      await refreshToken.create({
        userId: decoded.user.userId,
        refreshToken: newRefreshToken,
      });

      res.cookie("jwt", newRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000,
      });

      const currUser = await Users.findOne({
        where: { User_id: decoded.user.userId },
      });

      const menuAccess = await currUser.GetMenuAuth(currUser.role_id);
      const orgAccess = await currUser.GetUserOrgAccess(currUser.id);

      await refreshToken.destroy({
        where: { userId: decoded.user.userId, refreshToken: refreshTokenData },
      });

      res.json({
        user: {
          userId: decoded.user.userId,
          email: decoded.user.email,
          username: decoded.user.username,
          name: decoded.user.name,
          orgId: decoded.user.orgId,
          roleId: decoded.user.roleId,
        },
        menu: menuAccess,
        org: orgAccess,
        accessToken: newAccessToken,
      });
    },
  );
};

module.exports = { handleRefreshToken };
