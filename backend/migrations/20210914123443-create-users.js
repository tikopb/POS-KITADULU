'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    //define sequence first start from 1000 id 1- 1000 use for data seeder
    await queryInterface.sequelize.query("CREATE SEQUENCE user_id_seq start 101 increment 1")
    //create table dependency
    await queryInterface.createTable('Users', {
      User_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password:{
        type: Sequelize.STRING
      },
      isactive:{
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};