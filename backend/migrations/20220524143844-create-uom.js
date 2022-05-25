'use strict';
module.exports = {
  async up(queryInterface, Sequelize) { 
    return Promise.all([
      queryInterface.createTable('Uoms', {
        id: {
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
          allowNull:false,
          type:Sequelize.INTEGER
        },
        client_id:{
          allowNull:false,
          type:Sequelize.INTEGER
        }
      })
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Uoms');
  }
};