'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addConstraint(
        'Locators',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'lct_org_contraint',
          references: { //Required field
            table: 'Orgs',
            field: 'Org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'Locators',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'lct_client_contraint',
          references: { //Required field
            table: 'Clients',
            field: 'Client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'Locators',{
          fields: ['warehouse_id'],
          type: 'foreign key',
          name: 'lct_whr_contraint',
          references: { //Required field
            table: 'Warehouses',
            field: 'Warehouse_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Locators','lct_org_contraint'),
    queryInterface.removeConstraint('Locators','lct_client_contraint'),
    queryInterface.removeConstraint('Locators','lct_whr_contraint')
  }
};
