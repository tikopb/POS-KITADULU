'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addConstraint(
        'uom',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'uom_org_contraint',
          references: { //Required field
            table: 'org',
            field: 'org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'uom',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'uom_client_contraint',
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
    queryInterface.removeConstraint('uom','uom_org_contraint'),
    queryInterface.removeConstraint('uom','uom_client_contraint')
  }
};
