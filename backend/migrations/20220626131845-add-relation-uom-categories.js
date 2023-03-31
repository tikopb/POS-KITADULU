'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addConstraint(
        'uomconvertion',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'UomCon_org_contraint',
          references: { //Required field
            table: 'org',
            field: 'org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'uomconvertion',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'UomCon_client_contraint',
          references: { //Required field
            table: 'client',
            field: 'client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'uomconvertion',{
          fields: ['product_id'],
          type: 'foreign key',
          name: 'UomCon_product_contraint',
          references: { //Required field
            table: 'product',
            field: 'product_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'uomconvertion',{
          fields: ['uom_id'],
          type: 'foreign key',
          name: 'UomCon_uom_contraint',
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

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('uomconvertion','UomCon_org_contraint')
    queryInterface.removeConstraint('uomconvertion','UomCon_client_contraint')
    queryInterface.removeConstraint('uomconvertion','UomCon_product_contraint')
    queryInterface.removeConstraint('uomconvertion','UomCon_uom_contraint')
  }
};
