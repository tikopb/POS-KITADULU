"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('user', [
      {user_id:1, role_id:1, username:"Jack", name:"Jack P",  password:"$2b$10$zqsQhg4uAHdY2ILWhiUuzO4iJV4dYB6q9go6rl3uBHdpI6ero3gnK",  createdAt: new Date(), updatedAt: new Date() , org_id: 1, client_id: 1 },
      {user_id:2,role_id:2, username:"Lisa", name:"Lisa M", password:"$2b$10$xKO96YjypunL72LIA6HMFuHmDaQDe4IbrLYSO8HdS2cYkph6GV.1O",  createdAt: new Date(), updatedAt: new Date() , org_id: 1, client_id: 1 },
      {user_id:3, role_id:3, username:"Jenie", name:"Jenie AM", password:"$2b$10$cJ59tgXdB6NMsxt3oPFy6eGKwva1sgcyCAkZktdwuCvb5auIn5jo.",  createdAt: new Date(), updatedAt: new Date() , org_id: 1, client_id: 1 }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("user", null, {});
  },
};
