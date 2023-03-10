'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    Product_id:{
      type: DataTypes.INTEGER,
      //autoIncrement: true,
      primaryKey: true,
      defaultValue:  sequelize.Sequelize.literal("nextval('product_id_seq')")
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    isactive: DataTypes.BOOLEAN,
    org_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'org',
        key: 'Org_id'
      } 
    },
    client_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'client',
        key: 'Client_id'
      } 
    },
    uom_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'uom',
        key: 'Uom_id'
      } 
    },
    ProductCategories_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'productcategory',
        key: 'ProductCategories_id'
      } 
    },
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
    freezeTableName: true
  });
  return Product;
};