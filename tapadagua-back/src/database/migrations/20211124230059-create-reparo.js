'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('reparo', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      statusRep: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      dtReparo: {
        allowNull: false,
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('reparo');
  }
};
