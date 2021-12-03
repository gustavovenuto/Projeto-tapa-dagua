const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const conexao = new Sequelize(dbConfig);

const users = require('../api/models/usersModels.js');
const enderecos = require('../api/models/enderecosModels.js');
const denuncias = require('../api/models/denunciasModels.js');
const funcionario = require('../api/models/funcionarioModels.js');
const reparo = require('../api/models/reparoModels.js');

try {
    conexao.authenticate();
    console.log('Conexção estabelecida !!');
} catch(error) {
    console.log('Conexão não estabelecida !!', error);
}

users.init(conexao);
enderecos.init(conexao);
denuncias.init(conexao);
funcionario.init(conexao);
reparo.init(conexao);

module.exports = conexao;