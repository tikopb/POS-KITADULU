'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addConstraint(
        'Roles',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'role_org_const',
          references: { //Required field
            table: 'Orgs',
            field: 'Org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'Roles',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'role_client_const',
          references: { //Required field
            table: 'Clients',
            field: 'Client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'RolesMenus',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'roleMenu_org_const',
          references: { //Required field
            table: 'Orgs',
            field: 'Org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'RolesMenus',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'roleMenu_client_const',
          references: { //Required field
            table: 'Clients',
            field: 'Client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'RolesMenus',{
          fields: ['role_id'],
          type: 'foreign key',
          name: 'roleMenu_role_const',
          references: { //Required field
            table: 'Roles',
            field: 'role_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'RolesMenus',{
          fields: ['Menu_id'],
          type: 'foreign key',
          name: 'roleMenu_Menu_const',
          references: { //Required field
            table: 'Menus',
            field: 'menu_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'Menus',{
          fields: ['org_id'],
          type: 'foreign key',
          name: 'Menu_org_const',
          references: { //Required field
            table: 'Orgs',
            field: 'Org_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'Menus',{
          fields: ['client_id'],
          type: 'foreign key',
          name: 'Menu_client_const',
          references: { //Required field
            table: 'Clients',
            field: 'Client_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ),
      queryInterface.addConstraint(
        'Menus',{
          fields: ['ParentMenu_id'],
          type: 'foreign key',
          name: 'Parent_menu_const',
          references: { //Required field
            table: 'Menus',
            field: 'menu_id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Roles','role_org_const'),
    queryInterface.removeConstraint('Roles','role_client_const'),
    queryInterface.removeConstraint('RolesMenus','roleMenu_org_const'),
    queryInterface.removeConstraint('RolesMenus','roleMenu_client_const'),
    queryInterface.removeConstraint('RolesMenus','roleMenu_role_const'),
    queryInterface.removeConstraint('Menus','Menu_org_const'),
    queryInterface.removeConstraint('Menus','Menu_client_const'),
    queryInterface.removeConstraint('Menus','Parent_menu_const')
  }
};
