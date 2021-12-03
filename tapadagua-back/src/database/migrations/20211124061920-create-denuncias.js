'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('denuncias', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nro_protocolo: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      status_den: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      observacao: {
        allowNull: false,
        type: Sequelize.STRING(80),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('denuncias');
  }
};
