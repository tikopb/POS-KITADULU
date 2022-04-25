'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.GameRPS ,{
        foreignKey: 'userId'
      })
    }
    
    static #encrypt = (password) => bcrypt.hashSync(password, 10)
    
    static register = ({username, password, email, name}) => { 
      const encryptedPassword = this.#encrypt(password);
      return this.create({ username:username, password: encryptedPassword, email:email, name:name });
    }
    
    checkpassword = password => bcrypt.compareSync(password, this.password);
  
    generateToken = () => {
      const payload = {
        id: this.id,
        username: this.username
      }
      const secretKey = "binarWave10"
      const token = jwt.sign(payload, secretKey);
      return token;
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
  Users.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.STRING,
    city: DataTypes.STRING,
    total_score: DataTypes.INTEGER,
    isactive: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};