'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Menus', [
      {menu_id:1,Name: "Master",url_path: "/master", createdAt: new Date(), updatedAt: new Date(), sequence:1},
      {menu_id:2,Name: "Product",url_path: "/master/product", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date(), sequence:2},
      {menu_id:3,Name: "Business partner",url_path: "/master/BusinessPartner", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date(), sequence:3},
      {menu_id:4,Name: "UOM",url_path: "/master/UOM", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date(), sequence:4},
      {menu_id:5,Name: "Product Category",url_path: "/master/productCategory", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date(), sequence:5},
      {menu_id:6,Name: "Rekam Medis",url_path: "/master/RekamMedis", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date(), sequence:6},
      {menu_id:7,Name: "Pasien",url_path: "/master/RekamMedis/Pasien", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date(), sequence:7},
      {menu_id:8,Name: "Dokter",url_path: "/master/RekamMedis/Dokter", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date(), sequence:8},
      {menu_id:9,Name: "Resep",url_path: "/master/RekamMedis/Resep", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date(), sequence:9},
      {menu_id:10,Name: "Warehouse",url_path: "/master/Warehouse", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date(), sequence:10},
      {menu_id:11,Name: "Warehouse",url_path: "/master/Warehouse/Warehouse", ParentMenu_id:9,  createdAt: new Date(), updatedAt: new Date(), sequence:11},
      {menu_id:12,Name: "Locator",url_path: "/master/Warehouse/Locator", ParentMenu_id:9,  createdAt: new Date(), updatedAt: new Date(), sequence:12},
      {menu_id:13,Name: "Toko",url_path: "/master/Toko", ParentMenu_id:1,  createdAt: new Date(), updatedAt: new Date(), sequence:13},
      {menu_id:14,Name: "Tipe Pembayaran",url_path: "/master/Toko/TipePembayaran", ParentMenu_id:12,  createdAt: new Date(), updatedAt: new Date(), sequence:14},
      {menu_id:15,Name: "Karyawan",url_path: "/master/Toko/Karyawan", ParentMenu_id:12,  createdAt: new Date(), updatedAt: new Date(), sequence:15},
      {menu_id:16,Name: "Shift",url_path: "/master/Toko/Shift", ParentMenu_id:12,  createdAt: new Date(), updatedAt: new Date(), sequence:16},
      {menu_id:17,Name: "User",url_path: "/master/Toko/User", ParentMenu_id:12,  createdAt: new Date(), updatedAt: new Date(), sequence:17},
      {menu_id:18,Name: "Cabang",url_path: "/master/Toko/Cabang", ParentMenu_id:12,  createdAt: new Date(), updatedAt: new Date(), sequence:18},
      {menu_id:19,Name: "Order",url_path: "/Order", createdAt: new Date(), updatedAt: new Date(), sequence:19},
      {menu_id:20,Name: "Kebutuhan Barang (requisition)",url_path: "/Order/requisition", ParentMenu_id:18,  createdAt: new Date(), updatedAt: new Date(), sequence:20},
      {menu_id:21,Name: "Pembelian",url_path: "/Order/pembelian", ParentMenu_id:18,  createdAt: new Date(), updatedAt: new Date(), sequence:21},
      {menu_id:22,Name: "Barang Datang",url_path: "/Order/barangDatang", ParentMenu_id:18,  createdAt: new Date(), updatedAt: new Date(), sequence:22},
      {menu_id:23,Name: "Invoice",url_path: "/Order/invoice", ParentMenu_id:18,  createdAt: new Date(), updatedAt: new Date(), sequence:23},
      {menu_id:24,Name: "Payment",url_path: "/Order/Payment", ParentMenu_id:18,  createdAt: new Date(), updatedAt: new Date(), sequence:24},
      {menu_id:25,Name: "POS",url_path: "/POS", createdAt: new Date(), updatedAt: new Date(), sequence:25}
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
