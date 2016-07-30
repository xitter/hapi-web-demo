'use strict';

const Hapi = require('hapi');
const async = require('async');

const config = require('./config');
const serverConfig = config.server;

const options = {
    cache: require(serverConfig.options.cache),
    connections: {
        router: serverConfig.options.router,
        routes: {
            cors: serverConfig.options.cors,
            payload: serverConfig.options.payload
        }
    }
};

var server = new Hapi.Server(options);

server.connection({host: serverConfig.host, port: process.env.PORT || serverConfig.port});

async.series(
    [
        (next) => {
            require('./plugins')
                .init(server)
                .then(() => {
                    server.start(next);
                }).catch(next);
        }
    ],
    (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        } else {
            console.log('web server running at ', server.info.uri);
        }
    }
);

module.exports = server;

