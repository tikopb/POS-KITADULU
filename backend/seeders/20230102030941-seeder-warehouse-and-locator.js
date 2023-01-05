'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.bulkInsert('Warehouses',[
        {Warehouse_id :1, name: `Gudang Utama`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, description:'database dummy wist'},
        {Warehouse_id :2, name: `Gudang Kedua `, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, description:'database dummy wist'}
      ]),
      await queryInterface.bulkInsert('Locators',[
        {Locator_id :1, name: `Rak penerimaan`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, description:'locator barang di terima', warehouse_id:1},
        {Locator_id :2, name: `Rak Utama`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, description:'locator utama WIST', warehouse_id:1},
        {Locator_id :3, name: `Rak Belakang`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, description:'locator cadangan ', warehouse_id:2},
      ]) 
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkDelete('Locators', null, {}),
      queryInterface.bulkDelete('Warehouses', null, {})
    ])
  }
};
