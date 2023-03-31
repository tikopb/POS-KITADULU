'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addConstraint(
        'product',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'prd_org_contraint',
          references: { //Required field
            table: 'org',
            field: 'org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'product',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'prd_client_contraint',
          references: { //Required field
            table: 'client',
            field: 'client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'product',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'prd_uom_contraint',
          references: { //Required field
            table: 'uom',
            field: 'uom_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('product','prd_org_contraint'),
    queryInterface.removeConstraint('product','prd_client_contraint'),
    queryInterface.removeConstraint('product','prd_uom_contraint')
  }
};
