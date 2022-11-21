let { Users, Roles } = require('../models');
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

/**
 * Geeting isAdmin validation
 * @param {role_id} mandatory 
 * @returns isAdmin: boolean
 */
async function GetIsAdminValidation(role_id) {
    const role = await Roles.findByPk(role_id)
    return Promise.resolve(
        role.isadmin
    )
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
    login: async(req, res, next) => { 
        try {
            let user = await Users.authenticate(req.body)
            let isAdmins = await GetIsAdminValidation(user.role_id)
            res.status(200).json({
                "user_id": user.User_id,
                "username": user.username,
                "token": user.generateToken(),
                "client_id": user.client_id,
                "org_id": user.org_id,
                "role_id": user.role_id,
                "isAdmin": isAdmins
            })
        } catch (err) {
            res.status(500).json({
                "err": `${err.toString()}`
            })
        }
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
