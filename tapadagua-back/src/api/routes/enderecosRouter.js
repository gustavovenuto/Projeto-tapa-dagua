const  express = require('express');
const router = express.Router();

const enderecosControllers = require('../controllers/enderecosControllers.js');

router.get('/enderecos', enderecosControllers.index);

router.post('/enderecos', enderecosControllers.store);

router.put('/enderecos/:codigo', enderecosControllers.update);

router.delete('/enderecos/:codigo', enderecosControllers.delete);

module.exports = router;

