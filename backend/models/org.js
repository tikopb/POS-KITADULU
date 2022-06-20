'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Org extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Org.init({
    org_id:  {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    isactive: DataTypes.BOOLEAN,
    client_id: DataTypes.INTEGER,
    adress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Org',
  });
  return Org;
};