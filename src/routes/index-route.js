'use strict';

module.exports = (router) => {

    router.get('/', (req, res, next) =>
        res.status(200).send({
            title: "Olá mundo",
            version: "0.0.1"
        }));

    return router;
}

