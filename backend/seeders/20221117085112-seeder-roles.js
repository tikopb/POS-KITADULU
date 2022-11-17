'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [
      {role_id:1, name: "KiduOwner",isadmin: true , createdAt: new Date(), updatedAt: new Date() , org_id: 1, client_id: 1},
      {role_id:2, name: "KiduAdmin",isadmin: true , createdAt: new Date(), updatedAt: new Date() , org_id: 1, client_id: 1},
      {role_id:3, name: "KiduPos",isadmin: false , createdAt: new Date(), updatedAt: new Date() , org_id: 1, client_id: 1}
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
