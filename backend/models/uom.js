'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Uom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Uom.init({
    Uom_id: {
      type: DataTypes.INTEGER,
      //autoIncrement: true,
      primaryKey: true,
      defaultValue: sequelize.Sequelize.literal("nextval('uom_id_seq')")
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    isactive: DataTypes.BOOLEAN,
    org_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Uom',
  });
  return Uom;
};