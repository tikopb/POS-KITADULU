'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clients', [{
      name: 'Kita-Dulu',
      description: 'first client on system for testing',
      createdAt: new Date(),
      updatedAt: new Date(),
      isactive: true
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clients', null, {});
  }
};
