'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controller/customer-controller');

module.exports = () => {

    router.get('/', controller.getCustomerFindAll);

    router.post('/', controller.save);

    router.post('/authenticate', controller.authenticate);    

    router.get('/:email', controller.getCustomerFindByEmail);

    router.get('/:id', controller.getCustomerFindById);

    return router;
}