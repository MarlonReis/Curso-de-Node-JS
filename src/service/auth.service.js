'use strict';

const jwt = require('jsonwebtoken');

exports.gerateToken = async (data) => jwt.sign(data, global.SALT_KEY, { expiresIn: '1h'});


exports.desencriptaToken = async (token) => await jwt.verify(token, global.SALT_KEY, {
    algorithm: 'RS512'
});

exports.authrize = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, global.SALT_KEY, (error, decoded) => {
            if (error)
                res.status(401).json({ message: 'Token invalido!' });
            else
                next();

        });
    } else {
        res.status(401).json({ message: 'Acesso restrito!' });
    }
}