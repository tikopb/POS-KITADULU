'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'Roles',
      'description',
      {
        type: Sequelize.TEXT
      }
    )
    await queryInterface.addConstraint('Roles', {
      fields: ['name','org_id'],
      type: 'unique',
      name: 'Roles_name_org_id_key'
    });

  },

  async down (queryInterface, Sequelize) {
    
  }
};
