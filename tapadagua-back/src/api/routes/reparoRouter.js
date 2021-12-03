const  express = require('express');
const router = express.Router();

const reparoControllers = require('../controllers/reparoControllers.js');

router.get('/reparo', reparoControllers.index);

router.post('/reparo', reparoControllers.store);

router.put('/reparo/:codigo', reparoControllers.update);

router.delete('/reparo/:codigo', reparoControllers.delete);

module.exports = router;

