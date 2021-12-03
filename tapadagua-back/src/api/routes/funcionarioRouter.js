const  express = require('express');
const router = express.Router();

const empresaResponsavelControllers = require('../controllers/empresaResponsavelControllers.js');

router.get('/empresaResponsavel', empresaResponsavelControllers.index);

router.post('/empresaResponsavel', empresaResponsavelControllers.store);

router.put('/empresaResponsavel/:codigo', empresaResponsavelControllers.update);

router.delete('/empresaResponsavel/:codigo', empresaResponsavelControllers.delete);

module.exports = router;

