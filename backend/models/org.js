'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Org extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static GetOrganization(org_id, client_id){
      return Org.findOne({
          where: {
              Org_id: org_id,
              client_id: client_id,
              isactive: true
          }
      }).then(data => {
          if(data != null){
              return data
          }else{
              return null
          }
      })
    }

  }
  Org.init({
    Org_id:{
      type: DataTypes.INTEGER,
      //autoIncrement: true,
      primaryKey: true,
      defaultValue: sequelize.Sequelize.literal("nextval('org_id_seq')")
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    isactive: DataTypes.BOOLEAN,
    client_id: DataTypes.INTEGER,
    adress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'org',
    freezeTableName: true
  });
  return Org;
};