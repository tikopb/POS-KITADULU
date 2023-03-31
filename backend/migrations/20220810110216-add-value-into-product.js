'use strict';

//const { DataTypes } = require("sequelize/types");

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn(
        'product',
        'value',
        {
          type: Sequelize.STRING
        }
      ),
      await queryInterface.addConstraint('product', {
        fields: ['value', 'client_id'],
        type: 'unique',
        name: 'unique_value_product_const'
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('product','unique_value_product_const'),
    queryInterface.removeColumn('product','value')
  }
};
