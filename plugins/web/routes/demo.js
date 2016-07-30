"use strict";

const ViewDemo = require('../handlers/demoView');

module.exports = [
    {
        method: 'GET',
        path: '/demo',
        handler: ViewDemo
    }
];
