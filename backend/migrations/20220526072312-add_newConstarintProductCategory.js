'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addConstraint(
        'ProductCategories',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'prdct_org_contraint',
          references: { //Required field
            table: 'Orgs',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'ProductCategories',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'prdct_client_contraint',
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
    queryInterface.removeConstraint('ProductCategories','prdct_org_contraint'),
    queryInterface.removeConstraint('ProductCategories','prdct_client_contraint')
  }
};
