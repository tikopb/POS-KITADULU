'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'user',
        'org_id',
        Sequelize.INTEGER
      ),
      queryInterface.addColumn(
        'user',
        'client_id',
        Sequelize.INTEGER
      ),
      queryInterface.addConstraint(
        'user',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'usr_org_contraint',
          references: { //Required field
            table: 'org',
            field: 'org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'user',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'usr_client_contraint',
          references: { //Required field
            table: 'client',
            field: 'client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'user', {
          fields: ['username', 'client_id'],
          type: 'unique',
          name: 'user_client_unique_value'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeConstraint('user','user_client_unique_value'),
      queryInterface.removeConstraint('user','usr_org_contraint'),
      queryInterface.removeConstraint('user','usr_client_contraint'),
      queryInterface.removeColumn('user', 'org_id'),
      queryInterface.removeColumn('user', 'client_id'),
    ])
  }
};
