const Path = require('path');

exports.register = (server, options, callback) => {
    server.route({
        method: 'GET',
        path: '/{file}',
        handler: function (request, reply) {
            return reply.file(Path.join(__dirname, '../../statics/dist/' + request.params.file));
        }
    });
    return callback();
};

exports.register.attributes = {
    pkg: require('./config.json')
};