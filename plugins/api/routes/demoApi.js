"use strict";

const demoApiHandler = require('../handlers/demo');

module.exports = [
    {
        method: 'GET',
        path: '/demo',
        handler: demoApiHandler.getDemoData
    }
];