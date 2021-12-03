const { Where } = require('sequelize/dist/lib/utils');
const Denuncias = require('../models/denunciasModels.js');

module.exports = {
    async index(req, res){
        try{
        const denuncias = await Denuncias.findAll();
        console.log('Retorno denuncias: ' + denuncias);
        return res.json(denuncias);} catch(e) {
            console.log(e)
        }
    },

    async indexId(req, res){
        try{
        const {codigo} = req.params;
        const denuncias = await Denuncias.findAll({where: {nro_protocolo:codigo}})
        console.log('Retorno denuncia: ' + denuncias);
        return res.json(denuncias);} catch(e) {
            console.log(e)
        }
    },

    async store(req, res){
        try{
        const { observacao, nro_protocolo } = req.body;
        const denuncia = await Denuncias.create({observacao, nro_protocolo});
        return res.status(200).send({
            status: 1,
            message: "Denuncias cadastrado com sucesso !!!",
            denuncia
        })} catch(e) {
            console.log(e)
        }
    },

    async update(req, res){
        const { rua, numero, bairro, cidade, cep, pontoReferencia } = req.body;
        const { codigo } = req.params;

        await Denuncias.update({
            rua, numero, bairro, cidade, cep, pontoReferencia
        }, { where: { id: codigo }});
        return res.status(200).send({
            stauts: 1,
            message: "Denuncias atualizado com sucesso !!!",
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await Denuncias.destroy({ where: { id: codigo }});
        return res.status(200).send({
            status: 1,
            message: "Denuncias excluido com sucesso !!!"
        })
    }
}