'use strict';

const Hapi = require('hapi')
const HapiNowAuth = require('@now-ims/hapi-now-auth');

const path = require('path')
const settings = require('config')

const routes = require('./routes')
const plugins = require('./plugins')
const models = require('./models')

const server = new Hapi.Server({debug: {
    request: ['received']
}, port: settings.port, host: settings.host})

server.events.on('log', (event, tags) => {

    if (tags.error) {
        console.log(`Server error: ${event.error ? event.error.message : 'unknown'}`);
    }
});

// Export the server to be required elsewhere.
module.exports = server

/*
 var initDb = function(cb){
 var sequelize = models.sequelize;

 //Test if we're in a sqlite memory database. we may need to run migrations.
 if(sequelize.getDialect()==='sqlite' &&
 (!sequelize.options.storage || sequelize.options.storage === ':memory:')){
 sequelize.getMigrator({
 path: process.cwd() + '/migrations',
 }).migrate().success(function(){
 // The migrations have been executed!
 cb();
 });
 } else {
 cb();
 }
 };
 */

async function startServer() {
    try {
        await server.register(HapiNowAuth);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }


    server.auth.strategy('jwt-strategy', 'hapi-now-auth', {
        verifyJWT: true,
        keychain: [settings.secret],
        validate: async (request, token, h) => {
            /**
             * we asked the plugin to verify the JWT
             * we will get back the decodedJWT as token.decodedJWT
             * and we will get the JWT as token.token
             */
            let credentials = token.decodedJWT

            let isValid = false
            let artifacts = '';
            let expirationDate = new Date(credentials.exp * 1000)
            if (expirationDate > new Date(Date.now())) {
                isValid = true
            } else {
            }
            return {isValid, credentials, artifacts}
        }
    });

    server.auth.default('jwt-strategy');

    server.route(routes)

    try {
        await server.start();
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
    console.log('Server started at: ' + server.info.uri);
}

return startServer();