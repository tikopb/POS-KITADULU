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
    Users.authenticate(req.body)
      .then(async (Users) => {
        const { User_id, username } = Users;
        const token = Users.generateToken(Users);

        await refreshToken.create({
          userId: User_id,
          refreshToken: token.refreshToken,
        });

        res.cookie("jwt", token.refreshToken, {
          httpOnly: true,
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
};
