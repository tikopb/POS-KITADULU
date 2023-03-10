'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('uom', [
      {uom_id:1, name:'PCS', description:'-',  createdAt: new Date(), updatedAt: new Date(), client_id: 1, org_id: 1 },
      {uom_id:2, name:'SET', description:'-',  createdAt: new Date(), updatedAt: new Date(), client_id: 1, org_id: 1 },
      {uom_id:3, name:'BOX', description:'-',  createdAt: new Date(), updatedAt: new Date(), client_id: 1, org_id: 1 }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('uom', null, {});
  }
};
