'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('RolesMenus', [
      {Menu_id:1, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:2, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:3, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:4, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:5, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:6, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:7, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:8, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:9, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:10, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:11, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:12, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:13, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:14, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:15, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:16, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:17, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:18, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:19, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:20, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:21, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:22, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:23, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:24, role_id: 1, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:1, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:2, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:3, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:4, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:5, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:6, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:7, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:8, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:9, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:10, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:11, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:12, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:13, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:14, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:15, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:16, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:17, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:18, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:19, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:20, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:21, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:22, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:23, role_id: 2, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true },
      {Menu_id:24, role_id: 3, org_id: 1, client_id:1, createdAt: new Date(), updatedAt: new Date(), isactive: true }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('RolesMenus', null, {});
  }
};
