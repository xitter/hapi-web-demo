"use strict";

const fs = require('fs'),
    path = require('path'),
    currentFile = path.basename(__filename);
var routes = [];

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (fs.lstatSync(path.join(__dirname, file)).isFile()) && (file !== currentFile);
    })
    .forEach((file) => {
        routes = routes.concat(require(path.join(__dirname, file)));
    });

module.exports = routes;
