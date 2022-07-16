'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UomConvertion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UomConvertion.init({
    UomConvertion_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    isactive: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    org_id: DataTypes.INTEGER,
    client_id:DataTypes.INTEGER,
    Product_id:DataTypes.INTEGER,
    uom_id:DataTypes.INTEGER,
    qtyConvertion:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UomConvertion',
  });
  return UomConvertion;
};