'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addConstraint(
        'OrgAccsesses',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'org_OrgAcc_const',
          references: { //Required field
            table: 'Orgs',
            field: 'Org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
      ),
      await queryInterface.addConstraint(
        'OrgAccsesses',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'client_OrgAcc_const',
          references: { //Required field
            table: 'Clients',
            field: 'Client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
      ),
      await queryInterface.addConstraint(
        'OrgAccsesses',{
          fields: ['user_id'],
          type: 'foreign key',
          name: 'org_OrgAccsesse_const',
          references: { //Required field
            table: 'Users',
            field: 'User_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('OrgAccsesses','org_OrgAcc_const'),
    await queryInterface.removeConstraint('OrgAccsesses','client_OrgAcc_const'),
    await queryInterface.removeConstraint('OrgAccsesses','org_OrgAccsesse_const')
  }
};
