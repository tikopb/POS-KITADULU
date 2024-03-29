"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class refreshToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  refreshToken.init(
    {
      userId: DataTypes.INTEGER,
      refreshToken: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "refreshToken",
      freezeTableName: true,
      tableName: "refreshTokens",
    },
  );
  return refreshToken;
};
