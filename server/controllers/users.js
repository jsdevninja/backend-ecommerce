var models = require('../models')

module.exports = {
    me: async (request, h) => {
        let result = null;
        await models.User.findOne({
            where: {
                id: request.auth.credentials.id
            }
        }).then(user => {
            result = user.dataValues;
        })
        return h.response(result);
    },
    get: async (request, h) => {
        return h.response(await models.User.findAll())
    },
    salute: async (request, h) => {
        return h.response('Hello, ' + encodeURIComponent(request.params.name) + '!')
    }
}