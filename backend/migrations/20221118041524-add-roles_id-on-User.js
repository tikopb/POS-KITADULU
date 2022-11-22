'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'role_id',
        {
          type: Sequelize.INTEGER
        }
      ),
      await queryInterface.addConstraint(
        'Users',{
          fields: ['role_id'],
          type: 'foreign key',
          name: 'user_roles_const',
          references: { //Required field
            table: 'Roles',
            field: 'role_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Users','user_roles_const')
  }
};
