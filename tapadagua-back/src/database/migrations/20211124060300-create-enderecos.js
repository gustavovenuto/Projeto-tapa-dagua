'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      rua: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      numero: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      bairro: {
        allowNull: false,
        type: Sequelize.STRING(40),
      },
      cidade: {
        allowNull: false,
        type: Sequelize.STRING(40),
      },
      cep: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      ponto_referencia: {
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
    await queryInterface.dropTable('enderecos');
  }
};
