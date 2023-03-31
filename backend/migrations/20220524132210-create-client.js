'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
     //define sequence first start from 1000 id 1- 1000 use for data seeder
     await queryInterface.sequelize.query("CREATE SEQUENCE client_id_seq start 11 increment 1")
     //create table dependency
    await queryInterface.createTable('client', {
      client_id: {
        allowNull: false,
        //autoIncrement: true,
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query("drop sequence client_id_seq;")
    await queryInterface.dropTable('client');
  }
};