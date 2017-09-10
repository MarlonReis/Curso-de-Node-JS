'use strict';

const controller = require('../controller/customer-controller');

module.exports = (router) => {

    router.get('/', controller.getCustomerFindAll);

    router.post('/', controller.save);

    router.get('/:email', controller.getCustomerFindByEmail);

    router.get('/:id', controller.getCustomerFindById);


    return router;
}