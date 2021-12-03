const Users = require('../models/usersModels.js');

module.exports = {
    async index(req, res){
        const users = await Users.findAll();
        console.log('Retorno Users: ' + users);
        return res.json(users);
    },

    async store(req, res){
        try {
        const { usr_nome, usr_cpf, usr_telefone, usr_email, usr_password } = req.body;
        console.log(req.body);
        const user = await Users.create({usr_nome, usr_cpf, usr_telefone, usr_email, usr_password});
        return res.status(200).send({
            status: 1,
            message: "Usuario cadastrado com sucesso !!!",
            user
        })
        } catch(e){
            console.log('teste');
            console.log(e);
        }
    },

    async update(req, res){
        const { usr_nome, usr_cpf, usr_telefone, usr_email, usr_password } = req.body;
        const { codigo } = req.params;

        await Users.update({
            usr_nome, usr_cpf, usr_telefone, usr_email, usr_password
        }, { where: { id: codigo }});
        return res.status(200).send({
            stauts: 1,
            message: "Usuario atualizado com sucesso !!!",
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await Users.destroy({ where: { id: codigo }});
        return res.status(200).send({
            status: 1,
            message: "Usuario excluido com sucesso !!!"
        })
    }
}