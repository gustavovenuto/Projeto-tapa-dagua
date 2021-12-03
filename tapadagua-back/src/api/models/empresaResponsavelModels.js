const { Model, DataTypes } = require('sequelize');

class EmpresaResponsavel extends Model {
    static init(sequelize) {
        super.init({
            razaoSocial: DataTypes.STRING,
            cnpj: DataTypes.INTEGER,
            descricao: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'empresaResponsavel'
        }
        );
        return this;
    }
}

module.exports = EmpresaResponsavel;