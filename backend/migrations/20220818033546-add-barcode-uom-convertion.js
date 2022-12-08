'use strict';

module.exports = {
  
  async up (queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn(
        'UomConvertions',
        'sku',
        {
          type: Sequelize.STRING
        }
      ),
      await queryInterface.addConstraint('UomConvertions', {
        fields: ['sku'],
        type: 'unique',
        name: 'unique_value_sku_uom'
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('UomConvertion','unique_value_sku_uom'),
    queryInterface.removeColumn('UomConvertion','sku')
  }
};
