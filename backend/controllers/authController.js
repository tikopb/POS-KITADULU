let { Users, refreshToken, Menu } = require("../models");
const bcrypt = require("bcrypt");
const { QueryTypes } = require('sequelize');
const db = require("../models");

async function GetMenu(role_id) {
  let list = await GetAllMenu(role_id)
  var map = {}, node, roots = [], i;
  for (i = 0; i < list.length; i += 1) {
    map[list[i].Menu_id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }
  
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.ParentMenu_id !== "0" && node.ParentMenu_id !== null  ) {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.ParentMenu_id]].children.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
}

async function GetAllMenu (role_idP) { 
 // await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });
 const MenuList = await db.sequelize.query('select rm."Menu_id" , m."Name" , m."ParentMenu_id" , null as children from "RolesMenus" rm  join "Menus" m on rm."Menu_id"  = m.menu_id  where rm.role_id = ? order by sequence ',
  { 
      replacements: [role_idP],
      type: QueryTypes.SELECT 
  });
  return MenuList;
}

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
            secure: true,
            sameSite: "none",
          });
        }

        await refreshToken.create({
          userId: User_id,
          refreshToken: token.refreshToken,
        });

        res.cookie("jwt", token.refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          maxAge: 24 * 60 * 60 * 1000, // ini jadinya 1 hari,
        });

        let menuAcsess = await GetMenu(Users.role_id)
        res.json({
          user: {
            userId: Users.User_id,
            email: Users.email,
            username: Users.username,
            name: Users.name,
            orgId: Users.org_id,
            roleId: Users.role_id,
          },
          menu: menuAcsess,
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
