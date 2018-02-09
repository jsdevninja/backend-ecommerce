const HapiNowAuth = require('@now-ims/hapi-now-auth');

module.exports = [
    HapiNowAuth
    //set up good to log every kind of event. Change according to your needs.
    /*
    {
        plugin: require('good'),
        name: 'good',
        options: {
            reporters: {
                reporter: require('good-console'),
                args: [{log: '*', request: '*', ops: '*', error: '*'}]
            }
        }
    },
    {
        plugin: require('hapi-bodyparser'),
        options: {
            json: true,
            urlencoded: {
                extended: true
            }
        }
    }
     */
];
