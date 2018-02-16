'use strict';
const models = require('../models')
const controllers =require('../controllers');
const Joi = require('joi');
const bcrypt = require('bcrypt')

const register = function (server, serverOptions) {
    server.route({
        method: 'POST',
        path: '/auth/login',
        handler: controllers.auth.login,
        options: {
            auth: false,
            validate: {
                payload: {
                    email: Joi.string().email().required(),
                    password: Joi.string().required()
                }
            },
            pre: [
                {
                    assign: 'user',
                    method: async function(request, h) {
                        let result = null
                        await models.User.findOne({
                            where: {
                                email: request.payload.email
                            }
                        }).then(user => {
                            result = user.dataValues;
                        })

                        return result;
                    }
                }
            ]
        }
    });

    server.route({
        method: 'POST',
        path: '/auth/signup',
        handler: controllers.auth.signup,
        options: {
            auth: false,
            validate: {
                payload: {
                    email: Joi.string().email().required(),
                    password: Joi.string().required()
                }
            },
            pre: [
                {
                    assign: 'emailCheck',
                    method: async function(request, h) {
                        let isExist = false;
                        await models.User.findOne({
                            where: {
                                email: request.payload.email
                            }
                        }).then(user => {
                            if(user != null)
                                isExist = true;
                        })

                        return isExist;
                    }
                }
            ]
        }
    });

    server.route({
        method: 'POST',
        path: '/auth/changePassword',
        handler: controllers.auth.changePassword,
        options: {
            validate: {
                payload: {
                    originPassword: Joi.string().required(),
                    newPassword: Joi.string().required()
                }
            },
            pre: [
                {
                    assign: 'confirmPassword',
                    method: async function(request, h) {
                        let result = false;
                        await models.User.findOne({
                            where: {
                                id: request.auth.credentials.id
                            }
                        }).then(user => {
                            if(user != null) {
                                if(bcrypt.compareSync(request.payload.originPassword, user.dataValues.passwordHash)) {
                                    result = true;
                                }
                            }
                        })
                        return result;
                    }
                }
            ]
        }
    })

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