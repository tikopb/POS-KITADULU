'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addConstraint(
        'Uoms',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'uom_org_contraint',
          references: { //Required field
            table: 'Orgs',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'Uoms',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'uom_client_contraint',
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
    queryInterface.removeConstraint('Uoms','uom_org_contraint'),
    queryInterface.removeConstraint('Uoms','uom_client_contraint')
  }
};
