'use strict';
const settings = require('config');

const manifest = {
    // $meta: 'This file defines the plot device.',
    server: {
        debug: {
            request: ['received']
        },
        routes: {
            security: true
        },
        port: settings.port,
        host: settings.host,
    },
    register: {
        plugins: [
            {
                plugin: require('@now-ims/hapi-now-auth')
            },
        ]
    }
}

module.exports = manifest;