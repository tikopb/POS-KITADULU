let { user } = require('../models');
const bcrypt = require('bcrypt');


function format(user){
    const { id, username } = user
    return{ 
        id,
        username,
        token: user.generateToken()
    }
}

module.exports = { 
    register: (req, res, next) => {
        user.register(req.body)
        .then(user => {
            res.status(200).json(
                format(user)
            )
        })
        .catch((err) => next(
            res.status(500).json({
                "err": `${err.toString()}`
            })
        ));
    },
    login: (req, res, next) => {
        user.authenticate(req.body)
            .then(user => {
                res.json(
                    format(user)
                )
            })
            .catch( (err)=> next(
                res.status(500).json({
                    "err": `${err.toString()}`
                })
            ));
    },
    whoami: (req, res) => {
        const currentuser = req.user;
        try {
            res.status(200).json(currentuser)
        } catch (err) {
            res.status(400).json({
                message: "token error"
            })
        }
    }
}
