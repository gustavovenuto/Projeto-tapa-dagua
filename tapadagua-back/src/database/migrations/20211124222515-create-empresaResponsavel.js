'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('empresaResponsavel', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      razaoSocial: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      cnpj: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      descricao: {
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
    await queryInterface.dropTable('empresaResponsavel');
  }
};
