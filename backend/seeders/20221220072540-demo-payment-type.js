'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('PaymentTypes', [
      {PaymentType_id :1, name: `Tunai`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, createdBy:1, updatedBy: 1, isactive: true, description: `pembayaran tunai`},
      {PaymentType_id :2, name: `QRIS`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, createdBy:1, updatedBy: 1, isactive: true, description: `pembayaran qris gopay`},
      {PaymentType_id :3, name: `EDC BCA`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, createdBy:1, updatedBy: 1, isactive: true, description: `edc bca`}
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('PaymentTypes', null, {});
  }
};
