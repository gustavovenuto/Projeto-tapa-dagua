const { Model, DataTypes } = require('sequelize');

class Averiguacao extends Model {
    static init(sequelize) {
        super.init({
            statusAve: DataTypes.STRING,
            dtAveriguacao: DataTypes.DATE,
            observacao: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'averiguacao'
        }
        );
        return this;
    }
}

module.exports = Averiguacao;