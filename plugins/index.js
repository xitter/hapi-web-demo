"use strict";

const Async = require('async');

var initialize = function (server) {

    return new Promise((resolve, reject) => {

        Async.series([
            (next) => {
                server.register(require('inert'), next);
            },
            (next) => {
                server.register(require('vision'), next);
            },
            (next) => {
                var config = require('./api/config.json');
                server.register(
                    require('./api'),
                    {
                        routes: {prefix: config.prefix}
                    },
                    (err) => {
                        if (err) {
                            console.error("error loading plugin", config.name, err);
                        } else {
                            console.log(config.name, "Loaded");
                        }
                        return next(err);
                    });
            },
            (next) => {
                var config = require('./web/config.json');
                server.register(
                    require('./web'),
                    {
                        routes: {prefix: config.prefix}
                    },
                    (err) => {
                        if (err) {
                            console.error("error loading plugin", config.name, err);
                        } else {
                            console.log(config.name, "Loaded");
                        }
                        return next(err);
                    });
            },
            (next) => {
                var config = require('./staticServe/config.json');
                server.register(
                    require('./staticServe'),
                    {
                        routes: {prefix: config.prefix}
                    },
                    (err) => {
                        if (err) {
                            console.error("error loading plugin", config.name, err);
                        } else {
                            console.log(config.name, "Loaded");
                        }
                        return next(err);
                    });
            }
        ], (err)=> {
            if (err) {
                return reject(err);
            }
            return resolve();
        });
    });

};

module.exports = {
    init: initialize
};


