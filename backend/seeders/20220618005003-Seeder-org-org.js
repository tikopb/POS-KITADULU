'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Orgs', [{
      name: 'Kita-Dulu',
      description: 'first org on system for testing',
      createdAt: new Date(),
      updatedAt: new Date(),
      isactive: true,
      client_id:1,
      Org_id: 1
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orgs', null, {});
  }
};
