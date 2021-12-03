'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('enderecos', 'numero', {
        type: Sequelize.INTEGER,
        allowNull: true
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.changeColumn('enderecos', 'numero')])
  }
};
