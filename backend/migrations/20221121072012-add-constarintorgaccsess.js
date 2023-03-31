'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addConstraint(
        'org_access',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'org_OrgAcc_const',
          references: { //Required field
            table: 'org',
            field: 'org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
      ),
      await queryInterface.addConstraint(
        'org_access',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'client_OrgAcc_const',
          references: { //Required field
            table: 'client',
            field: 'client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
      ),
      await queryInterface.addConstraint(
        'org_access',{
          fields: ['user_id'],
          type: 'foreign key',
          name: 'org_OrgAccsesse_const',
          references: { //Required field
            table: 'user',
            field: 'user_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('org_access','org_OrgAcc_const'),
    await queryInterface.removeConstraint('org_access','client_OrgAcc_const'),
    await queryInterface.removeConstraint('org_access','org_OrgAccsesse_const')
  }
};
