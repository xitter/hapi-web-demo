module.exports = {
    server: {
        host: 'localhost',
        port: 4000,
        options: {
            cors: {
                origin: ['*'],
                maxAge: 604800,     //remember cors policy in browser for 7 days
                credentials: true
            },
            cache: 'catbox-memory',
            router: {
                isCaseSensitive: false
            },
            payload: {
                maxBytes: 1048576
            }
        }
    },
    //Pass hostname as env variable to application
    hostname: process.env.host_name
};