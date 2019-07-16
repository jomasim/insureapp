'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'email', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('users', 'phone', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('users', 'password', {
      type: Sequelize.TEXT,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'email');
    await queryInterface.removeColumn('users', 'phone');
    await queryInterface.removeColumn('users', 'password');
  }
};
