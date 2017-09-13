'use strict'

const authService = require('../service/auth.service');

const express = require('express');
const router = express.Router();

const controller = require('../controller/product-controller');

module.exports = () => {

    router.get('/', authService.authrize, controller.get);

    router.post('/', authService.authrize, controller.post);

    router.delete('/', authService.authrize, controller.delete);

    router.put('/:id', authService.authrize, controller.put);


    return router;
}
