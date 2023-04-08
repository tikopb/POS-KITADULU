'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'user',
        'role_id',
        {
          type: Sequelize.INTEGER
        }
      ),
      await queryInterface.addConstraint(
        'user',{
          fields: ['role_id'],
          type: 'foreign key',
          name: 'user_roles_const',
          references: { //Required field
            table: 'role',
            field: 'role_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('user','user_roles_const')
  }
};
