'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();

const mongoose = require('mongoose');

mongoose.connect('mongodb://marlonreis:marlonreis@ds052649.mlab.com:52649/curso_balta_node_store');

//Carregar as module
const ProductyDao = require('./model/product-dao');
const CustomerDao = require('./model/custumer-dao');
const OrderDao = require('./model/order-dao');

const indexRoute    = require('./routes/index-route')(router);
const productRoute  = require('./routes/products-route')(router);
const costomerRoute = require('./routes/customer-router')(router);

//Transforma o objeto do body em JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use('/api', indexRoute);
app.use('/products', productRoute);
app.use('/customers', costomerRoute);


module.exports = app;