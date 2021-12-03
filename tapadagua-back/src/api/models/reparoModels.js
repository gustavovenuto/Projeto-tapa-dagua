const { Model, DataTypes } = require('sequelize');

class Reparo extends Model {
    static init(sequelize) {
        super.init({
            statusRep: DataTypes.STRING,
            dtReparo: DataTypes.DATE,
            observacao: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'reparo'
        }
        );
        return this;
    }
}

module.exports = Reparo;