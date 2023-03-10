'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'menu',
      'sequence',
      {
        type: Sequelize.INTEGER
      }
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('menu','sequence')
  }
};
