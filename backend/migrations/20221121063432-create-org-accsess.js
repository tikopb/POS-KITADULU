'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //define sequence first start from 1000 id 1- 1000 use for data seeder
    await queryInterface.sequelize.query("CREATE SEQUENCE org_access_id_seq start 1001 increment 1")
    //create table dependency
    return Promise.all([
      await queryInterface.createTable('OrgAccsesses', {
        OrgAccess_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        org_id: {
          type: Sequelize.INTEGER
        },
        client_id: {
          type: Sequelize.INTEGER
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
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      })
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrgAccsesses');
  }
};