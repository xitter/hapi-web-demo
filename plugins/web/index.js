"use strict";

const async = require('async'),
    Handlebars = require('handlebars'),
    Extend = require('handlebars-extend-block');

var routes = require('./routes');

exports.register = (server, options, callback) => {

    async.series(
        [
            (next) => {
                server.route(routes);
                next();
            },
            (next) => {
                server.views({
                    engines: {
                        hbs: Extend(Handlebars)
                    },
                    relativeTo: __dirname,
                    path: 'views',
                    layout: 'layout',
                    layoutPath: 'views/layout',
                    helpersPath: 'views/helpers',
                    partialsPath: 'views/partials'
                });
                next();
            }
        ],
        callback);

};


exports.register.attributes = {
    pkg: require('./config.json')
};


