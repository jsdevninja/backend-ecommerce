'use strict';

const Hapi = require('hapi')
const Glue = require('glue');
const Manifest = require('./manifest');

const path = require('path')
const settings = require('config')
const models = require('./server/models')

// Export the server to be required elsewhere.

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
    const options = { relativeTo: __dirname };
    const server = await Glue.compose(Manifest, options);
    server.events.on('log', (event, tags) => {

        if (tags.error) {
            console.log(`Server error: ${event.error ? event.error.message : 'unknown'}`);
        }
    });
    module.exports = server;

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