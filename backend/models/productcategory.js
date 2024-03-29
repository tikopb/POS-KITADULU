'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    static GetMaterilizedPg(){
      return "productcategory_Pg";
    }
  }
  ProductCategory.init({
    productcategory_id: {
      type: DataTypes.INTEGER,
      //autoIncrement: true,
      primaryKey: true,
      defaultValue: sequelize.Sequelize.literal("nextval('product_category_id_seq')")
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    isactive: DataTypes.BOOLEAN,
    org_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productcategory',
    tableName: 'productcategory',
    freezeTableName: true,
  });
  return ProductCategory;
};