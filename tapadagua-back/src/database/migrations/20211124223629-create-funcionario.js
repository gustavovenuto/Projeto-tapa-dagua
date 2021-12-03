'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('funcionario', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      cargo: {
        allowNull: false,
        type: Sequelize.STRING(20),
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
    await queryInterface.dropTable('funcionario');
  }
};
