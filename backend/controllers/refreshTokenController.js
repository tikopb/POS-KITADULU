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
      if (err) {
        // expired refresh token
        await refreshToken.destroy({
          where: {
            userId: decoded.user.userId,
            refreshToken: refreshTokenData,
          },
        });
      }

      if (err || userFound.userId !== decoded.user.userId) {
        return res.status(403).json({
          message: "token / user not same",
          code: "403",
        });
      }

      const currUser = await Users.findOne({
        where: { User_id: userFound.userId },
      });
      const token = currUser.generateToken(currUser);

      await refreshToken.create({
        userId: userFound.userId,
        refreshToken: token.refreshToken,
      });

      res.cookie("jwt", token.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000,
      });

      const menuAccess = await currUser.GetMenuAuth(currUser.role_id);
      const orgAccess = await currUser.GetUserOrgAccess(currUser.id);

      await refreshToken.destroy({
        where: { userId: currUser.User_id, refreshToken: refreshTokenData },
      });

      console.log("token.refreshToken");
      console.log(token.refreshToken);
      console.log("token.accessToken");
      console.log(token.accessToken);

      res.json({
        user: {
          userId: currUser.User_id,
          email: currUser.email,
          username: currUser.username,
          name: currUser.name,
          org_id: currUser.org_id,
          role_id: currUser.role_id,
          client_id: currUser.client_id,
        },
        menu: menuAccess,
        org: orgAccess,
        accessToken: token.accessToken,
      });
    },
  );
};

module.exports = { handleRefreshToken };
