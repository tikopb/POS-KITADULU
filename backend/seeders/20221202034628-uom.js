'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Uoms', [
      {Uom_id:1,  name:'PCS',description:'-',  createdAt: new Date(), updatedAt: new Date(), client_id: 1, org_id: 1 },
      {Uom_id:2,  name:'SET',description:'-',  createdAt: new Date(), updatedAt: new Date(), client_id: 1, org_id: 1 },
      {Uom_id:3,  name:'BOX',description:'-',  createdAt: new Date(), updatedAt: new Date(), client_id: 1, org_id: 1 }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Uoms', null, {});
  }
};
