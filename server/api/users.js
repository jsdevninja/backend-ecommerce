'use strict';
const controllers =require('../controllers');
const Joi = require('joi');

const register = function (server, serverOptions) {
    server.route({
        method: 'GET',
        path: '/users/me',
        handler: controllers.users.me,
        options: {
            tags: ['api'],
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string()
                }).unknown()
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/users/users',
        handler: controllers.users.get,
        options: {
            tags: ['api'],
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string()
                }).unknown()
            }
        }
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