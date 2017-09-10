'use strict'

const controller = require('../controller/product-controller');

module.exports = (router) => {

    router.get('/',controller.get);
    
    router.post('/', controller.post);
    
    router.delete('/', controller.delete);
    
    router.put('/:id', controller.put);


    return router;
}
