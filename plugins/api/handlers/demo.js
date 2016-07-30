"use strict";

module.exports = {
    getDemoData: (request, reply) => {
        let data = {
            name: 'xitter',
            country: 'India'
        };
        return reply(data);
    }
};