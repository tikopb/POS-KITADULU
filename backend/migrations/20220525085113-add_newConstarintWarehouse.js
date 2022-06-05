'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addConstraint(
        'Warehouses',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'whs_org_contraint',
          references: { //Required field
            table: 'Orgs',
            field: 'Org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'Warehouses',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'whs_client_contraint',
          references: { //Required field
            table: 'Clients',
            field: 'Client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Warehouses','whs_client_contraint'),
    queryInterface.removeConstraint('Warehouses','whs_org_contraint')
  }
};
