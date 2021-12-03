const Reparo = require('../models/reparoModels.js');

module.exports = {
    async index(req, res){
        const reparo = await Reparo.findAll();
        console.log('Retorno averiguação: ' + reparo);
        return res.json(reparo);
    },

    async store(req, res){
        const { statusRep, dtReparo, observacao } = req.body;
        const averiguacao = await Averiguacao.create({statusRep, dtReparo, observacao});
        return res.status(200).send({
            status: 1,
            message: "Reparo cadastrado com sucesso !!!",
            reparo
        })
    },

    async update(req, res){
        const { statusRep, dtReparo, observacao } = req.body;
        const { codigo } = req.params;

        await Reparo.update({
            statusRep, dtReparo, observacao
        }, { where: { id: codigo }});
        return res.status(200).send({
            stauts: 1,
            message: "Reparo atualizado com sucesso !!!",
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await Reparo.destroy({ where: { id: codigo }});
        return res.status(200).send({
            status: 1,
            message: "Reparo excluido com sucesso !!!"
        })
    }
}