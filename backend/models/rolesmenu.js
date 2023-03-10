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
    rolesmenu_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: sequelize.Sequelize.literal("nextval('roles_menu_id_seq')")
    },
    org_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER,
    isactive: DataTypes.BOOLEAN  
  }, {
    sequelize,
    modelName: 'rolesmenu',
    freezeTableName: true
  });
  return RolesMenu;
};