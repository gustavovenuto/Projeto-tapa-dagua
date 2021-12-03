const express = require('express');

const http = require('http');

require('./database/index.js');

const routesUser = require('./api/routes/usersRoutes');
const routesEnderecos = require('./api/routes/enderecosRouter');
const routesDenuncias = require('./api/routes/denunciasRouter');
const routesEmpresaResponsavel = require('./api/routes/empresaResponsavelRouter');
const routesAveriguacao = require('./api/routes/averiguacaoRouter');
const routesReparo = require('./api/routes/reparoRouter');

const { O_NOATIME } = require('constants');

const app = express();

app.set('porta', 3308);
app.set('url', 'http://localhost:');

app.use(express.json());
app.use(routesUser);
app.use(routesEnderecos);
app.use(routesDenuncias);
app.use(routesEmpresaResponsavel);
app.use(routesAveriguacao);
app.use(routesReparo);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('servidor Rodando em ' + app.get('url') + app.get('porta'));
})