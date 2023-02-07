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
    role_id: {
      type: DataTypes.INTEGER,
      //autoIncrement: true,
      primaryKey: true,
      defaultValue: sequelize.Sequelize.literal("nextval('roles_id_seq')")
    },
    org_id: {   
      type: DataTypes.INTEGER,
      allowNull: false
    },
    client_id: {   
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,    
    description: DataTypes.TEXT,
    isactive: DataTypes.BOOLEAN,
    isadmin: DataTypes.BOOLEAN,
    name: {   
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Roles;
};