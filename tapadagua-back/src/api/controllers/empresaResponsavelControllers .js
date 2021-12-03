const EmpresaResponsavel = require('../models/empresaResponsavelModels.js');

module.exports = {
    async index(req, res){
        const empresaResponsavel = await EmpresaResponsavel.findAll();
        console.log('Retorno empresa responsavel: ' + empresaResponsavel);
        return res.json(empresaResponsavel);
    },

    async store(req, res){
        const { razaoSocial, cnpj, descricao } = req.body;
        const empresaResponsavel = await EmpresaResponsavel.create({razaoSocial, cnpj, descricao});
        return res.status(200).send({
            status: 1,
            message: "Empresa responsavel cadastrada com sucesso !!!",
            empresaResponsavel
        })
    },

    async update(req, res){
        const { razaoSocial, cnpj, descricao } = req.body;
        const { codigo } = req.params;

        await EmpresaResponsavel.update({
            razaoSocial, cnpj, descricao
        }, { where: { id: codigo }});
        return res.status(200).send({
            stauts: 1,
            message: "Empresa Responsavel atualizado com sucesso !!!",
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await EmpresaResponsavel.destroy({ where: { id: codigo }});
        return res.status(200).send({
            status: 1,
            message: "Empresa Responsavel excluido com sucesso !!!"
        })
    }
}