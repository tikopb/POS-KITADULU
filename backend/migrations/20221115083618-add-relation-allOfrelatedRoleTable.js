'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addConstraint(
        'role',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'role_org_const',
          references: { //Required field
            table: 'org',
            field: 'org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'role',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'role_client_const',
          references: { //Required field
            table: 'client',
            field: 'client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'rolesmenu',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'roleMenu_org_const',
          references: { //Required field
            table: 'org',
            field: 'org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'rolesmenu',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'roleMenu_client_const',
          references: { //Required field
            table: 'client',
            field: 'client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'rolesmenu',{
          fields: ['role_id'],
          type: 'foreign key',
          name: 'roleMenu_role_const',
          references: { //Required field
            table: 'role',
            field: 'role_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'rolesmenu',{
          fields: ['menu_id'],
          type: 'foreign key',
          name: 'roleMenu_Menu_const',
          references: { //Required field
            table: 'menu',
            field: 'menu_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'menu',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'Menu_org_const',
          references: { //Required field
            table: 'org',
            field: 'org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'menu',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'Menu_client_const',
          references: { //Required field
            table: 'client',
            field: 'client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'menu',{
          fields: ['parentmenu_id'],
          type: 'foreign key',
          name: 'Parent_menu_const',
          references: { //Required field
            table: 'menu',
            field: 'menu_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('role','role_org_const'),
    queryInterface.removeConstraint('role','role_client_const'),
    queryInterface.removeConstraint('rolesmenu','roleMenu_org_const'),
    queryInterface.removeConstraint('rolesmenu','roleMenu_client_const'),
    queryInterface.removeConstraint('rolesmenu','roleMenu_role_const'),
    queryInterface.removeConstraint('rolesmenu','roleMenu_Menu_const'),
    queryInterface.removeConstraint('menu','Menu_org_const'),
    queryInterface.removeConstraint('menu','Menu_client_const'),
    queryInterface.removeConstraint('menu','Parent_menu_const')
  }
};
