'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'user',
        'karyawan_id',
        {
          type: Sequelize.INTEGER
        }
      ),
      await queryInterface.addConstraint(
        'user',{
          fields: ['karyawan_id'],
          type: 'foreign key',
          name: 'user_karyawan_const',
          references: { //Required field
            table: 'karyawan',
            field: 'karyawan_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('user','user_karyawan_const')
    queryInterface.removeColumn('user','karyawan_id')
  }
};
