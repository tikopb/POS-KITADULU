'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //define sequence first start from 1000 id 1- 1000 use for data seeder
    await queryInterface.sequelize.query("CREATE SEQUENCE PaymentType_id_seq start 11 increment 1")
     //create table dependency
    await queryInterface.createTable('PaymentTypes', {
      PaymentType_id: {
        allowNull: false,
        //autoIncrement: true,
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
      org_id: {
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER
      },
      createdBy: {
        type: Sequelize.INTEGER
      }, 
      updatedBy: {
        type: Sequelize.INTEGER
      }
    },
    {
      uniqueKeys: {
        actions_unique: {
            fields: ['name', 'org_id']
        }
      }
    }
    )
    //adding constaint
    await queryInterface.addConstraint(
      'PaymentTypes',{
        fields: ['org_id'],
        type: 'foreign key',
        name: 'org_paymentType_const',
        references: { //Required field
          table: 'Orgs',
          field: 'Org_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    )
    await queryInterface.addConstraint(
      'PaymentTypes',{
        fields: ['client_id'],
        type: 'foreign key',
        name: 'client_paymentType_const',
        references: { //Required field
          table: 'Clients',
          field: 'Client_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    )
    await queryInterface.addConstraint(
      'PaymentTypes',{
        fields: ['createdBy'],
        type: 'foreign key',
        name: 'userCr_paymentType_const',
        references: { //Required field
          table: 'Users',
          field: 'User_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    )
    await queryInterface.addConstraint(
      'PaymentTypes',{
        fields: ['updatedBy'],
        type: 'foreign key',
        name: 'userUp_paymentType_const',
        references: { //Required field
          table: 'Users',
          field: 'User_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    )

    ;
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PaymentTypes');
  }
};