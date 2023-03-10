'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  menu.init({
    menu_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    org_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    Name: DataTypes.TEXT,
    url_path: DataTypes.TEXT,
    parentmenu_id: DataTypes.INTEGER,
    sequence: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'menu',
    freezeTableName: true
  });
  return menu;
};