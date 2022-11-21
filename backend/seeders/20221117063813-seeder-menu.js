'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Menus', [
      {menu_id:1,Name: "Master",url_path: "/master", createdAt: new Date(), updatedAt: new Date()},
      {menu_id:2,Name: "Product",url_path: "/master/product", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:3,Name: "Business partner",url_path: "/master/BusinessPartner", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:4,Name: "UOM",url_path: "/master/UOM", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:5,Name: "Rekam Medis",url_path: "/master/RekamMedis", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:6,Name: "Pasien",url_path: "/master/RekamMedis/Pasien", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:7,Name: "Dokter",url_path: "/master/RekamMedis/Dokter", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:8,Name: "Resep",url_path: "/master/RekamMedis/Resep", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:9,Name: "Warehouse",url_path: "/master/Warehouse", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:10,Name: "Warehouse",url_path: "/master/Warehouse/Warehouse", ParentMenu_id:9,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:11,Name: "Locator",url_path: "/master/Warehouse/Locator", ParentMenu_id:9,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:12,Name: "Toko",url_path: "/master/Toko", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:13,Name: "Tipe Pembayaran",url_path: "/master/Toko/TipePembayaran", ParentMenu_id:12,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:14,Name: "Karyawan",url_path: "/master/Toko/Karyawan", ParentMenu_id:12,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:15,Name: "Shift",url_path: "/master/Toko/Shift", ParentMenu_id:12,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:16,Name: "User",url_path: "/master/Toko/User", ParentMenu_id:12,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:17,Name: "Cabang",url_path: "/master/Toko/Cabang", ParentMenu_id:12,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:18,Name: "Order",url_path: "/Order", createdAt: new Date(), updatedAt: new Date()},
      {menu_id:19,Name: "Kebutuhan Barang (requisition)",url_path: "/Order/requisition", ParentMenu_id:18,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:20,Name: "Pembelian",url_path: "/Order/pembelian", ParentMenu_id:18,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:21,Name: "Barang Datang",url_path: "/Order/barangDatang", ParentMenu_id:18,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:22,Name: "Invoice",url_path: "/Order/invoice", ParentMenu_id:18,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:23,Name: "Payment",url_path: "/Order/Payment", ParentMenu_id:18,  createdAt: new Date(), updatedAt: new Date()},
      {menu_id:24,Name: `POS`,url_path: `/POS`, createdAt: new Date(), updatedAt: new Date()},
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
