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
    ClientBusinesspartner_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    isactive: DataTypes.BOOLEAN,
    org_id:DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    value: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Businesspartner',
  });
  return Businesspartner;
};