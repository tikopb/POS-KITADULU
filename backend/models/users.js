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
    }
    
    static #encrypt = (password) => bcrypt.hashSync(password, 10)
    
    /**
     * Register validate function, make encrypt password when register user is hited
     * 1. validation first there is no same user (user mase be unique)!
     * 2. if existing then return null and mesage with erorr
     * @param {username, password, email, name, client_id, org_id, role_id} mandatory 
     * @returns Create the users
     */
    static register = async ({username, password, email, name, client_id, org_id, role_id}) => { 
      const encryptedPassword = this.#encrypt(password);

      //validation on user must be unique
      let user = await this.findOne({ where: { username }})
      if (user != null) {
        return Promise.reject("user is exist")
      }

      return Promise.resolve(
        this.create({ username:username, password: encryptedPassword, 
          email:email, name:name, client_id:client_id, org_id:org_id, role_id:role_id})
      )
    }
    
    checkpassword = password => bcrypt.compareSync(password, this.password);
  
    generateToken = () => {
      const payload = {
        id: this.id,
        username: this.username
      }
      const secretKey = "posKita"
      const token = jwt.sign(payload, secretKey);
      return token;
    }

    /**
     * use to get authenticate with username or email
     * @param {username, email, passsword} param
     * @returns users data
     */
    static authenticate = async ({ username, email, password }) => {
      try {
        let user = await this.findOne({ where: { username }})
        if (user == null) {
          user = await this.findOne({ where: { email }})
        }
        if(user == null){
          return Promise.reject("user not found")
        }

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
    User_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
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
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};