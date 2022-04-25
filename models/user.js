'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }    
    //mehod for encrypt password
    static #encrypt = (password) => bcrypt.hashSync (password, 10)
    checkpassword = password => bcrypt.compareSync(password, this.password)
    
    generateToken = () => {
      const payload = {
        id: this.id,
        username: this.username
      }
      const secretKey = "pos-kita"
      const token = jwt.sign(payload, secretKey);
      return token;
    }
    
    static register = ({ username, password, name}) => {
      const encryptedPassword = this.#encrypt(password);
      return this.create({ username:username, password: encryptedPassword, name:name });
    }
    
    static authenticate = async ({ username, password }) => {
      try {
        const user = await this.findOne({ where: { username }})
        if (!user) return Promise.reject("User not found!")

        const isPasswordValid = user.checkpassword(password)
        if (!isPasswordValid) return Promise.reject("Wrong password")

        return Promise.resolve(user)
      }
      catch(err) {
        return Promise.reject(err)
      }
    }
  };
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    isactive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};