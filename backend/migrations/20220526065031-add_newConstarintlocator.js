'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addConstraint(
        'locator',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'lct_org_contraint',
          references: { //Required field
            table: 'org',
            field: 'org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'locator',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'lct_client_contraint',
          references: { //Required field
            table: 'client',
            field: 'client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'locator',{
          fields: ['warehouse_id'],
          type: 'foreign key',
          name: 'lct_whr_contraint',
          references: { //Required field
            table: 'warehouse',
            field: 'warehouse_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('locator','lct_org_contraint'),
    queryInterface.removeConstraint('locator','lct_client_contraint'),
    queryInterface.removeConstraint('locator','lct_whr_contraint')
  }
};
