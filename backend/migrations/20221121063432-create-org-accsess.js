'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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