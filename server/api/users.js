'use strict';
var controllers =require('../controllers');

const register = function (server, serverOptions) {
    server.route({
        method: 'GET',
        path: '/users/users',
        handler: controllers.users.get,
    });
    
    server.route({
        method: 'GET',
        path: '/users/salute/{name}',
        handler: controllers.users.salute,
    });
}

module.exports = {
    name: 'users',
    dependencies: [],
    register
}