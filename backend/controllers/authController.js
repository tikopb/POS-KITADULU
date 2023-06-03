let { user, refreshToken, Menu } = require("../models");
const bcrypt = require("bcrypt");
const { QueryTypes } = require("sequelize");
const db = require("../models");

module.exports = {
  register: (req, res, next) => {
    user.register(req.body)
      .then((user) => {
        res.status(200).json(format(user));
      })
      .catch((err) =>
        next(
          res.status(500).json({
            err: `${err.toString()}`,
          }),
        ),
      );
  },
  login: (req, res, next) => {
    const cookies = req.cookies;
    user.authenticate(req.body)
      .then(async (user) => {
        const { user_id, username } = user;
        const token = user.generateToken(user);

        if (cookies?.jwt) {
          /* 
          Scenario added here: 
              1) User logs in but never uses RT and does not logout 
              2) RT is stolen
              3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
          */
          const currRefreshToken = cookies.jwt;
          const foundToken = await refreshToken.destroy({
            where: { refreshToken: currRefreshToken },
          });

          // Detected refresh token reuse!
          if (!foundToken) {
            await refreshToken.destroy({
              where: {
                userId: User_id,
              },
            });
          }

          res.clearCookie("jwt", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
          });
        }

        await refreshToken.create({
          userId: user_id,
          refreshToken: token.refreshToken,
        });

        res.cookie("jwt", token.refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          maxAge: 24 * 60 * 60 * 1000, // ini jadinya 1 hari,
        });

        const menuAccess = await user.GetMenuAuth(user.role_id);
        const orgAccess = await user.GetUserOrgAccess(user.user_id);
        res.status(200).json({
          status: 'Auth succsess',
          msg: 'Login success',
          user: {
            userId: user.user_id,
            email: user.email,
            username: user.username,
            name: user.name,
            Org_id: user.org_id,
            Role_id: user.role_id,
            Client_id: user.client_id,
          },
          menu: menuAccess,
          accessToken: token.accessToken,
          org: orgAccess,
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: 'Auth failed',
          msg: `${err.toString()}`
        });
      });
  },
  whoami: (req, res) => {
    const currentUser = req.user;
    try {
      res.status(200).json(currentUser);
    } catch (err) {
      res.sendStatus(403);
    }
  },
  logout: async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // sucess but not content
    const refreshTokenData = cookies.jwt;
    const userFound = await refreshToken.findOne({
      where: { refreshToken: refreshTokenData },
    });

    if (!userFound) {
      res.clearCookie("jwt", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });

      return res.sendStatus(204);
    }

    await refreshToken.destroy({
      where: { userId: userFound.userId, refreshToken: refreshTokenData },
    });

    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.sendStatus(204);
  },
};
