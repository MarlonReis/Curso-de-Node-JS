'use strict';

const jwt = require('jsonwebtoken');

exports.gerateToken = async (data) => jwt.sign(data, global.SALT_KEY, {
    algorithm: 'RS256',
    expiresIn: '1h'
});

exports.desencriptaToken = async (token) => await jwt.verify(token, global.SALT_KEY, {
    algorithm: 'RS256'
});