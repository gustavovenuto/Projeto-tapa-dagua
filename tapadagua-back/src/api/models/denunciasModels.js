const { Model, DataTypes } = require('sequelize');

class Denuncias extends Model {
    static init(sequelize) {
        super.init({
            nro_protocolo: DataTypes.INTEGER,
            status_den: DataTypes.STRING,
            observacao: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'denuncias'
        }
        );
        return this;
    }
}

module.exports = Denuncias;