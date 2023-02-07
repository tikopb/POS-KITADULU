'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'karyawan_id',
        {
          type: Sequelize.INTEGER
        }
      ),
      await queryInterface.addConstraint(
        'Users',{
          fields: ['karyawan_id'],
          type: 'foreign key',
          name: 'user_karyawan_const',
          references: { //Required field
            table: 'Karyawans',
            field: 'karyawan_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Users','user_karyawan_const')
    queryInterface.removeColumn('Users','karyawan_id')
  }
};
