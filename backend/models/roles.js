'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Roles.init({
    Role_id: {
      type: DataTypes.INTEGER,
      //autoIncrement: true,
      primaryKey: true,
      defaultValue: sequelize.Sequelize.literal("nextval('roles_id_seq')")
    },
    org_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,    
    description: DataTypes.TEXT,
    isactive: DataTypes.BOOLEAN,
    isadmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Roles',
  });
  return Roles;
};