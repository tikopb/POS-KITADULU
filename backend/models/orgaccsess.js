'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrgAccsess extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrgAccsess.init({
    org_access_id: {
      type: DataTypes.INTEGER,
      //autoIncrement: true,
      primaryKey: true,
      defaultValue: sequelize.Sequelize.literal("nextval('org_access_id_seq')")
    },
    isactive: DataTypes.BOOLEAN,
    org_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'org_access',
    tableName: 'org_access',
    underscored: true,
    freezeTableName: true
  });
  return OrgAccsess;
};
