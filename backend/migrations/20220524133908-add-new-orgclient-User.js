'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'org_id',
        Sequelize.INTEGER
      ),
      queryInterface.addColumn(
        'Users',
        'client_id',
        Sequelize.INTEGER
      ),
      queryInterface.addConstraint(
        'Users',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'usr_org_contraint',
          references: { //Required field
            table: 'Orgs',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'Users',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'usr_client_contraint',
          references: { //Required field
            table: 'Clients',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeConstraint('Users','usr_org_contraint'),
      queryInterface.removeConstraint('Users','usr_client_contraint'),
      queryInterface.removeColumn('Users', 'org_id'),
      queryInterface.removeColumn('Users', 'client_id'),
    ])
  }
};