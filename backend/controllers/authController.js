let { Users, refreshToken } = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  register: (req, res, next) => {
    Users.register(req.body)
      .then((Users) => {
        res.status(200).json(format(Users));
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
    Users.authenticate(req.body)
      .then(async (Users) => {
        const { User_id, username } = Users;
        const token = Users.generateToken(Users);

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
            secure: false,
            sameSite: "none",
          });
        }

        await refreshToken.create({
          userId: User_id,
          refreshToken: token.refreshToken,
        });

        res.cookie("jwt", token.refreshToken, {
          httpOnly: true,
          secure: false,
          sameSite: "none",
          maxAge: 24 * 60 * 60 * 1000, // ini jadinya 1 hari,
        });

        res.json({
          user: {
            userId: Users.User_id,
            email: Users.email,
            username: Users.username,
            name: Users.name,
            orgId: Users.org_id,
            roleId: Users.role_id,
          },
          accessToken: token.accessToken,
        });
      })
      .catch((err) =>
        next(
          res.status(500).json({
            err: `${err.toString()}`,
          }),
        ),
      );
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
        secure: false,
        sameSite: "none",
      });

      return res.sendStatus(204);
    }

    await refreshToken.destroy({
      where: { userId: userFound.userId, refreshToken: refreshTokenData },
    });

    res.clearCookie("jwt", {
      httpOnly: true,
      secure: false,
      sameSite: "none",
    });

    return res.sendStatus(204);
  },
};
