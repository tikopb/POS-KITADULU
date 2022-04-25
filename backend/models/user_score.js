'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_score.init({
    userId: DataTypes.NUMERIC,
    isWin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user_score',
  });
  return user_score;
};