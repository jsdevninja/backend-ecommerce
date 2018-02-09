const models = require('../models')

const jwt = require('jsonwebtoken')
const randtoken = require('rand-token')
const settings = require('config')

let refreshTokens = {}

module.exports = {
    login: async (req, h) => {
        let username = req.payload.username
        let password = req.payload.password
        let user = {
            'username': username,
            'role': 'admin'
        }
        let token = jwt.sign(user, settings.secret, { expiresIn: 300 })
        let refreshToken = randtoken.uid(256)
        refreshTokens[refreshToken] = username
        return h.response({token: 'Bearer ' + token, refreshToken: refreshToken})
    },
    token: async (req, h) => {
        let username = req.payload.username
        let refreshToken = req.payload.refreshToken
        if((refreshToken in refreshTokens) && (refreshTokens[refreshToken] == username)) {
            let user = {
                'username': username,
                'role': 'admin'
            }
            let token = jwt.sign(user, SECRET, { expiresIn: 300 })
            return h.response({token: 'Bearer ' + token})
        }
        else {
            return h.response.code = 401
        }
    },
    reject: async (req, h) => {
        let refreshToken = req.payload.refreshToken
        if(refreshToken in refreshTokens) {
            delete refreshTokens[refreshToken]
        }
        return h.response.code = 204
    },
    test_jwt: async (req, h) => {
        return h.response({success: 'You are authenticated with JWT!', user: req.user})
    }
}