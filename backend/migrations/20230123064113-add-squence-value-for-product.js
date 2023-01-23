'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query("CREATE SEQUENCE product_id_seq start 1000 increment 1");
  },

  async down (queryInterface, Sequelize) {
    
  }
};
