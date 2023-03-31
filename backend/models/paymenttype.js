'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentType.init({
    payment_type_id: {
      type: DataTypes.INTEGER,
      //autoIncrement: true,
      primaryKey: true,
      defaultValue: sequelize.Sequelize.literal("nextval('PaymentType_id_seq')")
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    isactive: DataTypes.BOOLEAN,
    org_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'payment_type',
    tableName: 'payment_type',
    freezeTableName: true,
    underscored: true
  });
  return PaymentType;
};