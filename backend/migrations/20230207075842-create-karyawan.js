'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //define sequence first start from 1000 id 1- 1000 use for data seeder
    await queryInterface.sequelize.query("CREATE SEQUENCE karyawan_id_seq start 100 increment 1")
    //create table dependency
    await queryInterface.createTable('karyawan', {
      karyawan_id: {
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
      nik: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      isactive: Sequelize.BOOLEAN,
    },{
      uniqueKeys: {
        actions_unique: {
          fields: ['nik', 'client_id']
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query("DROP SEQUENCE karyawan_id_seq")
    await queryInterface.dropTable('karyawan');
  }
};