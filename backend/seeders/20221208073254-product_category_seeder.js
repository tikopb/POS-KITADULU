'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('ProductCategories', [
      {ProductCategories_id :1, name: `Dekorasi`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :2, name: `Furniture`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :3, name: `Kamar Mandi`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :4, name: `Kamar Tidur`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :5, name: `Kebersihan`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :6, name: `Kebutuhan Rumah`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :7, name: `Lain-Lain`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :8, name: `Laundry`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :9, name: `Ruang Tamu & Keluarga`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :10, name: `Taman`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :11, name: `Tempat Penyimpanan`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :12, name: `Travel`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :13, name: `Arsitektur & Desain`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :14, name: `Buku Hukum`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :15, name: `Buku Import`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :16, name: `Buku Masakan`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :17, name: `Buku Persiapan Ujian`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :18, name: `Buku Remaja dan Anak`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :19, name: `Ekonomi & Bisnis`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :20, name: `Hobi`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :21, name: `Kamus & Bahasa Asing`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :22, name: `Kedokteran`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :23, name: `Keluarga`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :24, name: `Kesehatan & Gaya Hidup`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :25, name: `Kewanitaan`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :26, name: `Komik`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :27, name: `Komputer & Internet`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :28, name: `Lainnya`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :29, name: `Majalah`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :30, name: `Novel & Sastra`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :31, name: `Pendidikan`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :32, name: `Pengembangan Diri & Karir`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :33, name: `Pertanian`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :34, name: `Religi & Spiritual`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :35, name: `Sosial Politik`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :36, name: `Teknik & Sains`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :37, name: `Aksesoris Dapur`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :38, name: `Alat Masak Khusus`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :39, name: `Bekal`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :41, name: `Penyimpanan Makanan`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :42, name: `Peralatan Baking`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :43, name: `Peralatan Dapur`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :44, name: `Peralatan Makan & Minum`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :45, name: `Peralatan Masak`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :46, name: `Perlengkapan Cuci Piring`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :47, name: `Alat Pendingin Ruangan`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :48, name: `Elektronik Dapur`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :49, name: `Elektronik Kantor`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :50, name: `Elektronik Rumah Tangga`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :51, name: `Lampu`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :52, name: `Media Player`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :53, name: `Printer`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :54, name: `TV & Aksesoris`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :55, name: `Telepon`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :56, name: `Aksesoris Anak`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :57, name: `Aksesoris Bayi`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :58, name: `Baju & Sepatu Bayi`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :59, name: `Jam Tangan Anak`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :60, name: `Kostum Anak`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :61, name: `Pakaian Adat Anak`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :62, name: `Pakaian Anak Laki-Laki`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :63, name: `Pakaian Anak Perempuan`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :64, name: `Pakaian Dalam Anak`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :65, name: `Perhiasan Anak`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :66, name: `Sepatu Anak Laki-laki`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :67, name: `Sepatu Anak Perempuan`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :68, name: `Seragam Sekolah`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :69, name: `Tas Anak`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :70, name: `Aksesoris Muslim`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :71, name: `Atasan Muslim Wanita`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :72, name: `Baju Renang Muslim`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :73, name: `Bawahan Muslim Wanita`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :74, name: `Dress Muslim Wanita`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :75, name: `Jilbab`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :76, name: `Masker Hijab`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :77, name: `Outerwear Muslim Wanita`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :78, name: `Pakaian Muslim Anak`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :79, name: `Pakaian Muslim Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :80, name: `Perlengkapan Ibadah`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :81, name: `Aksesoris Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :82, name: `Aksesoris Sepatu Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :83, name: `Atasan Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :84, name: `Baju Tidur Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :85, name: `Batik Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :86, name: `Blazer & Jas Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :87, name: `Celana Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :88, name: `Jam Tangan Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :89, name: `Jeans & Denim Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :90, name: `Masker Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :91, name: `Outerwear Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :92, name: `Pakaian Adat Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :93, name: `Pakaian Dalam Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :94, name: `Perhiasan Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :95, name: `Sepatu Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :96, name: `Seragam Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :97, name: `Tas Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true},
      {ProductCategories_id :98, name: `Topi Pria`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true}
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ProductCategories', null, {});
  }
};
