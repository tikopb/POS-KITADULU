'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('menu', [
      {menu_id:1,Name: `Produk`,url_path: ``, parentmenu_id:null,  createdAt: new Date(), updatedAt: new Date(), sequence:1},
      {menu_id:2,Name: `Daftar Product`,url_path: `/produk/daftar-produk`, parentmenu_id:1,  createdAt: new Date(), updatedAt: new Date(), sequence:2},
      {menu_id:3,Name: `Satuan`,url_path: `/produk/satuan`, parentmenu_id:1,  createdAt: new Date(), updatedAt: new Date(), sequence:3},
      {menu_id:4,Name: `Produk Kategori`,url_path: `/produk/produk-kategori`, parentmenu_id:1,  createdAt: new Date(), updatedAt: new Date(), sequence:4},
      {menu_id:5,Name: `Order`,url_path: ``, parentmenu_id:null,  createdAt: new Date(), updatedAt: new Date(), sequence:5},
      {menu_id:6,Name: `Kebutuhan Barang`,url_path: `/order/kebutuhan-barang`, parentmenu_id:5,  createdAt: new Date(), updatedAt: new Date(), sequence:6},
      {menu_id:7,Name: `Pembelian`,url_path: `/order/pembelian`, parentmenu_id:5,  createdAt: new Date(), updatedAt: new Date(), sequence:7},
      {menu_id:8,Name: `Barang Datang`,url_path: `/order/barang-datang`, parentmenu_id:5,  createdAt: new Date(), updatedAt: new Date(), sequence:8},
      {menu_id:9,Name: `Faktur`,url_path: `/order/faktur`, parentmenu_id:5,  createdAt: new Date(), updatedAt: new Date(), sequence:9},
      {menu_id:10,Name: `Pembayaran`,url_path: `/order/pembayaran`, parentmenu_id:5,  createdAt: new Date(), updatedAt: new Date(), sequence:10},
      {menu_id:11,Name: `Mitra`,url_path: `/order/mitra`, parentmenu_id:5,  createdAt: new Date(), updatedAt: new Date(), sequence:11},
      {menu_id:12,Name: `Rekam Medis`,url_path: ``, parentmenu_id:null,  createdAt: new Date(), updatedAt: new Date(), sequence:12},
      {menu_id:13,Name: `Pasien`,url_path: `/rekammedis/pasien`, parentmenu_id:12,  createdAt: new Date(), updatedAt: new Date(), sequence:13},
      {menu_id:14,Name: `Dokter`,url_path: `/rekammedis/dokter`, parentmenu_id:12,  createdAt: new Date(), updatedAt: new Date(), sequence:14},
      {menu_id:15,Name: `Resep`,url_path: `/rekammedis/resep`, parentmenu_id:12,  createdAt: new Date(), updatedAt: new Date(), sequence:15},
      {menu_id:16,Name: `Laporan`,url_path: ``, parentmenu_id:null,  createdAt: new Date(), updatedAt: new Date(), sequence:16},
      {menu_id:17,Name: `Cek Stok`,url_path: `/laporan/cek-stok`, parentmenu_id:16,  createdAt: new Date(), updatedAt: new Date(), sequence:17},
      {menu_id:18,Name: `Laporan Penghasilan`,url_path: `/laporan/laporan-penghasilan`, parentmenu_id:16,  createdAt: new Date(), updatedAt: new Date(), sequence:18},
      {menu_id:19,Name: `Toko `,url_path: ``, parentmenu_id:null,  createdAt: new Date(), updatedAt: new Date(), sequence:19},
      {menu_id:20,Name: `Tipe Pembayaran`,url_path: `/toko/tipe-pembayaran`, parentmenu_id:19,  createdAt: new Date(), updatedAt: new Date(), sequence:20},
      {menu_id:21,Name: `Cabang`,url_path: `/toko/cabang`, parentmenu_id:19,  createdAt: new Date(), updatedAt: new Date(), sequence:21},
      {menu_id:22,Name: `Gudang`,url_path: `/toko/gudang`, parentmenu_id:19,  createdAt: new Date(), updatedAt: new Date(), sequence:22},
      {menu_id:23,Name: `Personalia`,url_path: ``, parentmenu_id:null,  createdAt: new Date(), updatedAt: new Date(), sequence:23},
      {menu_id:24,Name: `User`,url_path: `/personalia/user`, parentmenu_id:23,  createdAt: new Date(), updatedAt: new Date(), sequence:24},
      {menu_id:25,Name: `Jam Kerja`,url_path: `/personalia/jam-kerja`, parentmenu_id:23,  createdAt: new Date(), updatedAt: new Date(), sequence:25},
      {menu_id:26,Name: `Karyawan`,url_path: `/personalia/karyawan`, parentmenu_id:23,  createdAt: new Date(), updatedAt: new Date(), sequence:26},
      {menu_id:27,Name: `role`,url_path: `/personalia/role`, parentmenu_id:23,  createdAt: new Date(), updatedAt: new Date(), sequence:27},
      {menu_id:28,Name: `POS`,url_path: `/pos`, parentmenu_id:null,  createdAt: new Date(), updatedAt: new Date(), sequence:28},
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('menu', null, {});
  }
};
