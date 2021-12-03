const  express = require('express');
const router = express.Router();

const funcionarioControllers = require('../controllers/funcionarioControllers.js');

router.get('/funcionario', funcionarioControllers.index);

router.post('/funcionario', funcionarioControllers.store);

router.put('/funcionario/:codigo', funcionarioControllers.update);

router.delete('/funcionario/:codigo', funcionarioControllers.delete);

module.exports = router;

