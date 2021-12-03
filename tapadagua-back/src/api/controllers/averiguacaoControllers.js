const Averiguacao = require('../models/averiguacaoModels.js');

module.exports = {
    async index(req, res){
        const averiguacao = await Averiguacao.findAll();
        console.log('Retorno averiguação: ' + averiguacao);
        return res.json(averiguacao);
    },

    async store(req, res){
        const { statusAve, dtAveriguacao, observacao } = req.body;
        const averiguacao = await Averiguacao.create({statusAve, dtAveriguacao, observacao});
        return res.status(200).send({
            status: 1,
            message: "Averiguacao cadastrado com sucesso !!!",
            averiguacao
        })
    },

    async update(req, res){
        const { statusAve, dtAveriguacao, observacao } = req.body;
        const { codigo } = req.params;

        await Averiguacao.update({
            statusAve, dtAveriguacao, observacao
        }, { where: { id: codigo }});
        return res.status(200).send({
            stauts: 1,
            message: "Averiguacao atualizado com sucesso !!!",
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