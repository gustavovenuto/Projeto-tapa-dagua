'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('enderecos', 'Cod_cli', {
        type: Sequelize.INTEGER,
        references: {model: 'users', key: 'id'}
      }),
      queryInterface.addColumn('enderecos', 'Cod_den', {
        type: Sequelize.INTEGER,
        references: {model: 'denuncias', key: 'id'}
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('enderecos', 'Cod_cli')],
      [queryInterface.removeColumn('enderecos', 'Cod_den')])
  }
};
