'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addConstraint(
        'UomConvertions',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'UomCon_org_contraint',
          references: { //Required field
            table: 'Orgs',
            field: 'Org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'UomConvertions',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'UomCon_client_contraint',
          references: { //Required field
            table: 'Clients',
            field: 'Client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'UomConvertions',{
          fields: ['Product_id'],
          type: 'foreign key',
          name: 'UomCon_product_contraint',
          references: { //Required field
            table: 'Products',
            field: 'Product_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'UomConvertions',{
          fields: ['uom_id'],
          type: 'foreign key',
          name: 'UomCon_uom_contraint',
          references: { //Required field
            table: 'Uoms',
            field: 'Uom_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('UomConvertions','UomCon_org_contraint')
    queryInterface.removeConstraint('UomConvertions','UomCon_client_contraint')
    queryInterface.removeConstraint('UomConvertions','UomCon_product_contraint')
    queryInterface.removeConstraint('UomConvertions','UomCon_uom_contraint')
  }
};
