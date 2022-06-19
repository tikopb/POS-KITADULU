let { Users } = require('../models');
const bcrypt = require('bcrypt');


function format(Users){
    const { User_id, username } = Users
    return{ 
        User_id,
        username,
        token: Users.generateToken(),
        client_id: Users.client_id,
        org_id: Users.org_id
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
    },
    UpdateClient: (req, res) => {
        Users.findByPk(req.body.User_id)
        .then(user => {
            if(!user) {
                res.status(400).json({
                    message: "update Erorr user not found"
                })
            }
            user.client_id= req.body.client_id
            user.org_id= req.body.org_id;
            try {
                user.save();
                res.status(200).json({
                    user,
                    msg: "success updated client"
                })
            } catch (err) {
                res.status(401).json({
                    msg: err.message
                })
            }
        })
    }
}
