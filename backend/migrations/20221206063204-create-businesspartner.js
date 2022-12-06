'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Businesspartners', {
      Businesspartner_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      org_id: {
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.INTEGER
      }, 
    },
    {
      uniqueKeys: {
          actions_unique: {
              fields: ['value', 'org_id']
          }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Businesspartners');
  }
};