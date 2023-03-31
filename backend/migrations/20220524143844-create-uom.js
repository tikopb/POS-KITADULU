'use strict';
module.exports = {
  async up(queryInterface, Sequelize) { 
    //define sequence first start from 1000 id 1- 1000 use for data seeder
    await queryInterface.sequelize.query("CREATE SEQUENCE uom_id_seq start 101 increment 1")
    //create table dependency
    await queryInterface.createTable('uom', {
      uom_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      isactive: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      org_id:{
        type:Sequelize.INTEGER
      },
      client_id:{
        allowNull:false,
        type:Sequelize.INTEGER
      }
    },
    {
      uniqueKeys: {
          actions_unique: {
              fields: ['name', 'client_id']
          }
      }
    }
    )
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query("drop sequence uom_id_seq;")
    await queryInterface.dropTable('uom');
  }
};