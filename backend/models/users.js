"use strict";
const { Model } = require("sequelize");
const { QueryTypes } = require('sequelize');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static #encrypt = (password) => bcrypt.hashSync(password, 10);

    /**
     * Register validate function, make encrypt password when register user is hited
     * 1. validation first there is no same user (user mase be unique)!
     * 2. if existing then return null and mesage with erorr
     * @param {username, password, email, name, client_id, org_id, role_id} mandatory
     * @returns Create the users
     */
    static register = async ({
      username,
      password,
      email,
      name,
      client_id,
      org_id,
      role_id,
    }) => {
      const encryptedPassword = this.#encrypt(password);

      //validation on user must be unique
      let user = await this.findOne({ where: { username } });
      if (user != null) {
        return Promise.reject("user is exist");
      }

      return Promise.resolve(
        this.create({
          username: username,
          password: encryptedPassword,
          email: email,
          name: name,
          client_id: client_id,
          org_id: org_id,
          role_id: role_id,
        }),
      );
    };

    checkpassword = (password) => bcrypt.compareSync(password, this.password);

    generateToken = (userInformation) => {
      const payload = {
        user: {
          userId: userInformation.User_id,
          email: userInformation.email,
          username: userInformation.username,
          name: userInformation.name,
          orgId: userInformation.org_id,
          roleId: userInformation.role_id,
        },
      };
      
      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "60s",
      });
      const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "1d",
      });

      return { refreshToken, accessToken };
    };

    /**
     * use to get authenticate with username or email
     * @param {username, email, passsword} param
     * @returns users data
     */
    static authenticate = async ({ username, email, password }) => {
      try {
        let user = await this.findOne({ where: { username } });
        if (user == null) {
          user = await this.findOne({ where: { email } });
        }
        if (user == null) {
          return Promise.reject("user not found");
        }

        const isPasswordValid = user.checkpassword(password);
        if (!isPasswordValid) return Promise.reject("Wrong password");

        return Promise.resolve(user);
      } catch (err) {
        return Promise.reject(err);
      }
    };

    /**
     * Get Menu auth base on role 
     * @param {*} role_id 
     * @returns 
     */
    GetMenuAuth = async function (role_id) {
      let list = await sequelize.query('select rm."Menu_id" , m."Name" , m."ParentMenu_id" , null as children from "RolesMenus" rm  join "Menus" m on rm."Menu_id"  = m.menu_id  where rm.role_id = ? order by sequence ',
        {
          replacements: [role_id],
          type: QueryTypes.SELECT
        });
      var map = {}, node, roots = [], i;
      for (i = 0; i < list.length; i += 1) {
        map[list[i].Menu_id] = i; // initialize the map
        list[i].children = []; // initialize the children
      }

      for (i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node.ParentMenu_id !== "0" && node.ParentMenu_id !== null) {
          // if you have dangling branches check that map[node.parentId] exists
          list[map[node.ParentMenu_id]].children.push(node);
        } else {
          roots.push(node);
        }
      }
      return roots;
    }

    /**
     * Getting User org acsess for pos
     * @param {*} user_id 
     * @returns 
     */
    GetUserOrgAcsess = async function (user_id) {
      let accsess = await sequelize.query('select * from "OrgAccsesses" oa join "Orgs" o on oa.org_id = o."Org_id" where user_id = ?',
      {
        replacements: [user_id],
        type: QueryTypes.SELECT
      });
      return accsess;
    };

  }
  Users.init(
    {
      User_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      isactive: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      client_id: DataTypes.INTEGER,
      org_id: DataTypes.INTEGER,
      role_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Users",
    },
  );
  return Users;
};
