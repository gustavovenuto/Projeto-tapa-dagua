const  express = require('express');
const router = express.Router();

const denunciasControllers = require('../controllers/denunciasControllers.js');

router.get('/denuncias', denunciasControllers.index);

router.get('/denuncias/:codigo', denunciasControllers.indexId);

router.post('/denuncias', denunciasControllers.store);

router.put('/denuncias/:codigo', denunciasControllers.update);

router.delete('/denuncias/:codigo', denunciasControllers.delete);

module.exports = router;

