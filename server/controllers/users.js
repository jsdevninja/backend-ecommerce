var models = require('../models')

module.exports = {
    get: async (request, h) => {
        return h.response(await models.User.findAll())
    },
    salute: async (request, h) => {
        return h.response('Hello, ' + encodeURIComponent(request.params.name) + '!')
    }
}