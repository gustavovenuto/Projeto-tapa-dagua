'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('empresa_responsavel', 'Cod_den', {
        type: Sequelize.INTEGER,
        references: {model: 'denuncias', key: 'id'}
      }),
      queryInterface.addColumn('empresa_responsavel', 'Cod_fun', {
        type: Sequelize.INTEGER,
        references: {model: 'funcionario', key: 'id'}
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('empresa_responsavel', 'Cod_ren')],
      [queryInterface.removeColumn('empresa_responsavel', 'Cod_emp')])
  }
};
