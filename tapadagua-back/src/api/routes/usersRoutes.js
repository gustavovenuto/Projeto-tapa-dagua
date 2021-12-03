const  express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/usersControllers.js');

router.get('/users', usersControllers.index);

router.post('/users', usersControllers.store);

router.put('/users/:codigo', usersControllers.update);

router.delete('/users/:codigo', usersControllers.delete);

module.exports = router;

