'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Businesspartner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Businesspartner.init({
    business_partner_id: {
      type: DataTypes.INTEGER,
      //autoIncrement: true,
      primaryKey: true,
      defaultValue: sequelize.Sequelize.literal("nextval('business_partner_id_seq')")
    },
    isactive: DataTypes.BOOLEAN,
    org_id:DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: DataTypes.TEXT,
    name: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'business_partner',
    freezeTableName: true,
    underscored: true,
  });
  return Businesspartner;
};