'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('denuncias', 'status_den', {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: 'Em Analise'
      }),
      queryInterface.changeColumn('denuncias', 'nro_protocolo', {
        type: Sequelize.INTEGER,
        allowNull: false,
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.changeColumn('denuncias', 'status_den'), queryInterface.changeColumn('denuncias', 'nro_protocolo')])
  },
};
