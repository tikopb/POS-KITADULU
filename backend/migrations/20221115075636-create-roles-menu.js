'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //define sequence first start from 1000 id 1- 1000 use for data seeder
    await queryInterface.sequelize.query("CREATE SEQUENCE roles_menu_id_seq start 1000 increment 1")
    //create table dependency
    await queryInterface.createTable('rolesmenu', {
      rolesmenu_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      org_id: {
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      menu_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      isactive: {
        type: Sequelize.BOOLEAN
      },
      role_id: {
        type: Sequelize.INTEGER
      },
      menu_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query("drop sequence roles_menu_id_seq;")
    await queryInterface.dropTable('rolesmenu');
  }
};