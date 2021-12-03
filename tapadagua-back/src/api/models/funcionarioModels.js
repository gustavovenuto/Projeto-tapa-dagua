const { Model, DataTypes } = require('sequelize');

class Funcionario extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            cargo: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'funcionario'
        }
        );
        return this;
    }
}

module.exports = Funcionario;