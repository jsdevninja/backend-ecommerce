'use strict';
var controllers =require('../controllers');

const register = function (server, serverOptions) {
    server.route({
        method: 'POST',
        path: '/auth/login',
        handler: controllers.auth.login,
        options: {
            auth: false
        }
    });
    
    server.route({
        method: 'POST',
        path: '/auth/token',
        handler: controllers.auth.token,
    });
    
    server.route({
        method: 'POST',
        path: '/auth/reject',
        handler: controllers.auth.reject,
    });
    
    server.route({
        method: 'GET',
        path: '/auth/testjwt',
        handler: controllers.auth.test_jwt,
    });
}

module.exports = {
    name: 'auth',
    dependencies: [],
    register
}