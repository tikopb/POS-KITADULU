'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Products',
        'ProductCategories_id',
        Sequelize.INTEGER
      ),
      queryInterface.addConstraint(
        'Products',{
          fields: ['ProductCategories_id'],
          type: 'foreign key',
          name: 'prd_prdct_contraint',
          references: { //Required field
            table: 'ProductCategories',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Products','prd_prdct_contraint')
  }
};
