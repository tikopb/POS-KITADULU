'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'product',
      'productcategory_id',
      Sequelize.INTEGER
    ),
    await queryInterface.addConstraint(
      'product',{
        fields: ['productcategory_id'],
        type: 'foreign key',
        name: 'prd_prdct_contraint',
        references: { //Required field
          table: 'productcategory',
          field: 'productcategory_id'
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
