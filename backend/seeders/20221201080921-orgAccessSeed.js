'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('OrgAccsesses', [
      {user_id:1,  org_id:'1',client_id:'1',  createdAt: new Date(), updatedAt: new Date(), OrgAccess_id: 1},
      {user_id:2,  org_id:'1',client_id:'1',  createdAt: new Date(), updatedAt: new Date(), OrgAccess_id: 2},
      {user_id:3,  org_id:'1',client_id:'1',  createdAt: new Date(), updatedAt: new Date(), OrgAccess_id: 3},
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('OrgAccsesses', null, {});
  }
};
