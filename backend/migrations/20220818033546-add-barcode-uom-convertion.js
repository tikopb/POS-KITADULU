'use strict';

module.exports = {
  
  async up (queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn(
        'uomconvertion',
        'sku',
        {
          type: Sequelize.STRING
        }
      ),
      await queryInterface.addConstraint('uomconvertion', {
        fields: ['sku'],
        type: 'unique',
        name: 'unique_value_sku_uom'
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('uomconvertion','unique_value_sku_uom'),
    queryInterface.removeColumn('uomconvertion','sku')
  }
};
