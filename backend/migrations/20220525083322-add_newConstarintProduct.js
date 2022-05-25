'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addConstraint(
        'Products',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'prd_org_contraint',
          references: { //Required field
            table: 'Orgs',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'Products',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'prd_client_contraint',
          references: { //Required field
            table: 'Clients',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'Products',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'prd_uom_contraint',
          references: { //Required field
            table: 'Uoms',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Products','prd_org_contraint'),
    queryInterface.removeConstraint('Products','prd_client_contraint'),
    queryInterface.removeConstraint('Products','prd_uom_contraint')
  }
};
