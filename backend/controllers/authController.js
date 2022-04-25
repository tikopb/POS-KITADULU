let { Users } = require('../models');
const bcrypt = require('bcrypt');


function format(Users){
    const { id, username } = Users
    return{ 
        id,
        username,
        token: Users.generateToken()
    }
}

module.exports = { 
    register: (req, res, next) => {
        Users.register(req.body)
        .then(Users => {
            res.status(200).json(
                format(Users)
            )
        })
        .catch((err) => next(
            res.status(500).json({
                "err": `${err.toString()}`
            })
        ));
    },
    login: (req, res, next) => {
        Users.authenticate(req.body)
            .then(Users => {
                res.json(
                    format(Users)
                )
            })
            .catch( (err)=> next(
                res.status(500).json({
                    "err": `${err.toString()}`
                })
            ));
    },
    whoami: (req, res) => {
        const currentUser = req.user;
        try {
            res.status(200).json(currentUser)
        } catch (err) {
            res.status(400).json({
                message: "token error"
            })
        }
    }
}
