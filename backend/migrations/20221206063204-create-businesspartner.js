'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //define sequence first start from 1000 id 1- 1000 use for data seeder
    await queryInterface.sequelize.query("CREATE SEQUENCE business_partner_id_seq start 1000 increment 1")
    //create table dependency
    await queryInterface.createTable('business_partner', {
      business_partner_id: {
        allowNull: false,
        //autoIncrement: true,
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
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      }, 
      name: {
        type: Sequelize.TEXT
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
    await queryInterface.sequelize.query("drop sequence business_partner_id_seq;")
    await queryInterface.dropTable('business_partner');
  }
};