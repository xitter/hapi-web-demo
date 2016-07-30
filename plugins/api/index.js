"use strict";

const routes = require('./routes');

var register = (server, options, next) => {
    server.route(routes);
    return next();
};

register.attributes = {
    pkg: require('./config.json')
};

module.exports = register;
