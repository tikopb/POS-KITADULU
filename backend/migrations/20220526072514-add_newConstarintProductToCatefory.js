'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'product',
      'productCategory_id',
      Sequelize.INTEGER
    ),
    await queryInterface.addConstraint(
      'product',{
        fields: ['productCategory_id'],
        type: 'foreign key',
        name: 'prd_prdct_contraint',
        references: { //Required field
          table: 'productcategory',
          field: 'productCategory_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('product','prd_prdct_contraint')
  }
};
