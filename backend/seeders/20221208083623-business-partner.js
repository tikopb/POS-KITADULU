'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Businesspartners', [
      {Businesspartner_id :1, name: `Apparel`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, value: `101`, description: `Apparel`},
      {Businesspartner_id :2, name: `kiip`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, value: `102`, description: `kiip`},
      {Businesspartner_id :3, name: `Tisso`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, value: `103`, description: `Tisso`},
      {Businesspartner_id :4, name: `LAF`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, value: `104`, description: `LAF`},
      {Businesspartner_id :5, name: `TRU GO`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, value: `105`, description: `TRU GO`},
      {Businesspartner_id :6, name: `E Coffee`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, value: `106`, description: `E Coffee`},
      {Businesspartner_id :7, name: `Kee`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, value: `107`, description: `Kee`},
      {Businesspartner_id :8, name: `MicroPack`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, value: `108`, description: `MicroPack`},
      {Businesspartner_id :9, name: `Dekade`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, value: `109`, description: `Dekade`},
      {Businesspartner_id :10, name: `Qucus`, createdAt: new Date(), updatedAt: new Date(), org_id:1, client_id: 1, isactive: true, value: `110`, description: `Qucus`}
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Businesspartners', null, {});
  }
};

