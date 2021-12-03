const Enderecos = require('../models/enderecosModels.js');

module.exports = {
    async index(req, res){
        try{
        const endereco = await Enderecos.findAll();
        console.log('Retorno endereços: ' + endereco);
        return res.json(endereco);
        } catch(e) {
            console.log(e)
        }
    },

    async store(req, res){
        try {
        const { rua, numero, bairro, cidade, cep, ponto_referencia } = req.body;
        console.log(req.body)
        const endereco = await Enderecos.create({ rua, numero, bairro, cidade, cep, ponto_referencia });
        return res.status(200).send({
            status: 1,
            message: "Endereço cadastrado com sucesso !!!",
            endereco
        })
        } catch(e){
            console.log(e)
        }
    },

    async update(req, res){
        const { nroProtocolo, statusDen, dtDenuncia, observacao } = req.body;
        const { codigo } = req.params;

        await Enderecos.update({
            nroProtocolo, statusDen, dtDenuncia, observacao
        }, { where: { id: codigo }});
        return res.status(200).send({
            stauts: 1,
            message: "Endereço atualizado com sucesso !!!",
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await Enderecos.destroy({ where: { id: codigo }});
        return res.status(200).send({
            status: 1,
            message: "Endereço excluido com sucesso !!!"
        })
    }
}