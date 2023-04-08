'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addConstraint(
        'warehouse',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'whs_org_contraint',
          references: { //Required field
            table: 'org',
            field: 'org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'warehouse',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'whs_client_contraint',
          references: { //Required field
            table: 'client',
            field: 'client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('warehouse','whs_client_contraint'),
    queryInterface.removeConstraint('warehouse','whs_org_contraint')
  }
};
