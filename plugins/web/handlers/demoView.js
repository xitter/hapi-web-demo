"use strict";

module.exports = function (request, reply) {
    request.server.inject(
        '/api/demo',
        function (response) {
            return reply.view('demo', JSON.parse(response.payload));
        });
};