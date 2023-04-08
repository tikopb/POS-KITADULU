'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //define sequence first start from 1000 id 1- 1000 use for data seeder
    await queryInterface.sequelize.query("CREATE SEQUENCE PaymentType_id_seq start 11 increment 1")
     //create table dependency
    await queryInterface.createTable('payment_type', {
      payment_type_id: {
        allowNull: false,
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
      'payment_type',{
        fields: ['org_id'],
        type: 'foreign key',
        name: 'org_paymentType_const',
        references: { //Required field
          table: 'org',
          field: 'org_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    )
    await queryInterface.addConstraint(
      'payment_type',{
        fields: ['client_id'],
        type: 'foreign key',
        name: 'client_paymentType_const',
        references: { //Required field
          table: 'client',
          field: 'client_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    )
    await queryInterface.addConstraint(
      'payment_type',{
        fields: ['createdBy'],
        type: 'foreign key',
        name: 'userCr_paymentType_const',
        references: { //Required field
          table: 'user',
          field: 'user_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    )
    await queryInterface.addConstraint(
      'payment_type',{
        fields: ['updatedBy'],
        type: 'foreign key',
        name: 'userUp_paymentType_const',
        references: { //Required field
          table: 'user',
          field: 'user_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    )

    ;
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('payment_type','userUp_paymentType_const'),
    await queryInterface.removeConstraint('payment_type','userCr_paymentType_const'),
    await queryInterface.removeConstraint('payment_type','client_paymentType_const'),
    await queryInterface.removeConstraint('payment_type','org_paymentType_const'),
    await queryInterface.sequelize.query("drop sequence paymenttype_id_seq;")
    await queryInterface.dropTable('payment_type');
  }
};