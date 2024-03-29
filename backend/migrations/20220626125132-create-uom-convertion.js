'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('uomconvertion', {
      uomconvertion_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      isactive: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      org_id:{
        type:Sequelize.INTEGER
      },
      client_id:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      product_id:{
        allowNull: false,
        type:Sequelize.INTEGER
      },
      uom_id:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      qtyConvertion:{
        allowNull:false,
        type:Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('uomconvertion');
  }
};