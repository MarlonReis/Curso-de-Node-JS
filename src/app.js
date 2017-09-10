'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();

const mongoose = require('mongoose');

mongoose.connect('mongodb://marlonreis:marlonreis@ds052649.mlab.com:52649/curso_balta_node_store');

//Carregar as rotas
//const indexRoute   = require('./routes/index-route')(router);
const productRoute = require('./routes/products-route')(router);

//Transforma o objeto do body em JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use('/api', indexRoute);
app.use('/product', productRoute);


module.exports = app;