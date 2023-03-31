'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addConstraint(
        'productcategory',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'prdct_org_contraint',
          references: { //Required field
            table: 'org',
            field: 'org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'productcategory',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'prdct_client_contraint',
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
    queryInterface.removeConstraint('productcategory','prdct_org_contraint'),
    queryInterface.removeConstraint('productcategory','prdct_client_contraint')
  }
};
