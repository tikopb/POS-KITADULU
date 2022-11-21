let { Users } = require('../models');
const bcrypt = require('bcrypt');


function format(Users){
    const { User_id, username } = Users
    return{ 
        User_id,
        username,
        token: Users.generateToken(),
        client_id: Users.client_id,
        org_id: Users.org_id,
        role_id: Users.role_id
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
                "err": `${err.toString()}`,
                "msg": 'failed to create'
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
        console.log(currentUser)
        try {
            res.status(200).json(
                currentUser 
            )
        } catch (err) {
            res.status(400).json({
                message: "token error"
            })
        }
    }
}
