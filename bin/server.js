'use strict';

const normalizePort = (porta = 3000) => {
    const port = parseInt(porta, 10);
    if (isNaN(porta))
        return porta;

    if (port >= 0)
        return port;

    return false;
}


const onListening = () => {
    const addr = server.address();
    const bind = (typeof addr == 'string')
        ? `Pipe ${addr}` : `Porta ${addr.port}`;

    debug(`Evento in ${bind}`);
}

const app = require('../src/app');

const http    = require('http');
const debug   = require('debug')('nodestr:server');
const express = require('express');


const port = normalizePort(process.env.PORT);

app.set('port', port);

const server = http.createServer(app);


server.listen(port, (err) => {
    if (err) console.log(err.message);
    console.log('Run server 3000');
});

server.on('error', (err) => {
    console.log(err);
})
server.on('listening', onListening);





