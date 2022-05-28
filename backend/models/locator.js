'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Locator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Locator.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    isactive: DataTypes.BOOLEAN,
    org_id:DataTypes.INTEGER,
    client_id: sequelize.INTEGER,
    warehouse_id: sequelize.INTEGER
  }, {
    sequelize,
    modelName: 'Locator',
  });
  return Locator;
};