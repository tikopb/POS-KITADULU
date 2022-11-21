'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RolesMenu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RolesMenu.init({
    RolesMenu_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    org_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    Menu_id: DataTypes.INTEGER,
    isactive: DataTypes.BOOLEAN,
    isadmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'RolesMenu',
  });
  return RolesMenu;
};