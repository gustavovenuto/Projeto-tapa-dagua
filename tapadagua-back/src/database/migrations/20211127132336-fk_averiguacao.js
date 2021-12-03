'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('averiguacao', 'CodEmp', {
        type: Sequelize.INTEGER,
        references: {model: 'empresaResponsavel', key: 'id'}
      }),
      queryInterface.addColumn('averiguacao', 'CodRep', {
        type: Sequelize.INTEGER,
        references: {model: 'reparo', key: 'id'}
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('averiguacao', 'CodEmp')],
      [queryInterface.removeColumn('averiguacao', 'CodRep')])
  }
};
