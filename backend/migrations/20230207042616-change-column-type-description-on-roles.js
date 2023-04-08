'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // - dirubah menjadi add unique keys
    await queryInterface.addConstraint('role', {
      fields: ['name','org_id'],
      type: 'unique',
      name: 'Roles_name_org_id_key'
    });

  },

  async down (queryInterface, Sequelize) {
    
  }
};
