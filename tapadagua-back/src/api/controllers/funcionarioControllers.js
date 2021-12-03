const Funcionario = require('../models/funcionarioModels.js');

module.exports = {
    async index(req, res){
        const funcionario = await Funcionario.findAll();
        console.log('Retorno funcionario: ' + funcionario);
        return res.json(funcionario);
    },

    async store(req, res){
        const { nome, cargo } = req.body;
        const funcionario = await Funcionario.create({razaoSocial, cnpj, descricao});
        return res.status(200).send({
            status: 1,
            message: "funcionario cadastrado com sucesso !!!",
            funcionario
        })
    },

    async update(req, res){
        const { nome, cargo } = req.body;
        const { codigo } = req.params;

        await Funcionario.update({
            nome, cargo
        }, { where: { id: codigo }});
        return res.status(200).send({
            stauts: 1,
            message: "Funcionário atualizado com sucesso !!!",
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await Funcionario.destroy({ where: { id: codigo }});
        return res.status(200).send({
            status: 1,
            message: "Funcionário excluido com sucesso !!!"
        })
    }
}