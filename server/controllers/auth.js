const models = require('../models')

const jwt = require('jsonwebtoken')
const randtoken = require('rand-token')
const settings = require('config')
const bcrypt = require('bcrypt')

let refreshTokens = {}

module.exports = {
    login: async (req, h) => {
        let {email, password} = req.payload;
        let user = req.pre.user;
        if(user == null) 
            return h.response({message: 'User Not Found'}).code(404);
        if(bcrypt.compareSync(password, user.passwordHash)) {
            let token = jwt.sign(user, settings.secret, { expiresIn: '24h' });
            return h.response({token: 'Bearer ' + token});
        }
        // let refreshToken = randtoken.uid(256)
        // refreshTokens[refreshToken] = email

        // return h.response({token: 'Bearer ' + token, refreshToken: refreshToken})
        return h.response({message: 'Password Incorrect!'}).code(401);
    },
    signup: async (req, h) => {
        let {email, password} = req.payload;
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);

        let message = '';
        if(!req.pre.emailCheck)
            await models.User.create({
                email,
                passwordHash: hash,
            }).then( user => {
                message = 'User registered successfully!';
            });
        else message = 'User already registered!';

            return h.response({message})
    },
    changePassword: async (req, h) => {
        if(req.pre.confirmPassword) {
            const salt = bcrypt.genSaltSync();
            const hash = bcrypt.hashSync(req.payload.newPassword, salt);

            await models.User.update(
                {
                    passwordHash: hash,
                },
                {
                    where: {
                        id: req.auth.credentials.id
                    }
                }
            );
            return h.response({message: 'Password has been changed successfully!'});
        }
        return h.response({message: 'Original Password Incorrect'});
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
        return h.response({success: 'You are authenticated with JWT!', user: req.auth.credentials})
    }
}