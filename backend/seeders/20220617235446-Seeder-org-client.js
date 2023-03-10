'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('client', [{
      client_id: 1, 
      name: 'Kita-Dulu',
      description: 'first client on system for testing',
      createdAt: new Date(),
      updatedAt: new Date(),
      isactive: true
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('client', null, {});
  }
};
