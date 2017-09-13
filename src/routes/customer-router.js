'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controller/customer-controller');
const authService = require('../service/auth.service');

module.exports = () => {

    router.get('/', controller.getCustomerFindAll);

    router.post('/', controller.save);

    router.post('/authenticate', controller.authenticate);

    router.post('/refresh-token', authService.authrize, controller.reflashToken);

    router.get('/:email', controller.getCustomerFindByEmail);

    router.get('/:id', controller.getCustomerFindById);

    return router;
}