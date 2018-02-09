var controllers = require('./controllers');

module.exports = [
    {
        method: 'GET',
        path: '/users',
        handler: controllers.users.get
    },
    {
        method: 'GET',
        path: '/salute/{name}',
        handler: controllers.users.salute
    },
    {
        method: 'POST',
        path: '/auth',
        handler: controllers.auth.login,
        options: {
            auth: false
        }
    },
    {
        method: 'POST',
        path: '/token',
        handler: controllers.auth.token
    },
    {
        method: 'POST',
        path: '/token/reject',
        handler: controllers.auth.reject
    },
    {
        method: 'GET',
        path: '/testjwt',
        handler: controllers.auth.test_jwt
    }

];
