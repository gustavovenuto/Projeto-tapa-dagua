const  express = require('express');
const router = express.Router();

const averiguacaoControllers = require('../controllers/averiguacaoControllers.js');

router.get('/averiguacao', averiguacaoControllers.index);

router.post('/averiguacao', averiguacaoControllers.store);

router.put('/averiguacao/:codigo', averiguacaoControllers.update);

router.delete('/averiguacao/:codigo', averiguacaoControllers.delete);

module.exports = router;

