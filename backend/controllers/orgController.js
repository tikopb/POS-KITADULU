let { Org } = require('../models');
const { Op } = require("sequelize");

module.exports = {
    GenerateOrganization: async(req, res) => {
        const {name, description, address} = req.body;
        const UserCrd = req.user
        try {
            await Org.create({
                name: name,
                description: description,
                isactive: true,
                client_id: UserCrd.Client_id,
                address: address
            })
            res.status(200).json({
                msg: 'Organization registered',
                status: 'succsess'
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ status: 'error', msg: `Organization with name ${name} already exists`});
            } else {
                res.status(500)
                res.send({ status: 'error', msg: "Something went wrong"});
            }
        }
    },
    UpdateOrganization: async(req,res) => {
        const {name, description, address, org_id, isactive} = req.body;
        let orgData = client.findByPk(org_id)
        try {
            orgData.set({
                name: name,
                description: description,
                address: address,
                isactive: isactive
            })
            await orgData.save()
            res.status(200).json({
                msg: 'organization updated'
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ status: 'error', msg: `Organization with name ${name} already exists`});
            } else {
                res.status(500)
                res.send({ status: 'error', msg: "Something went wrong"});
            }
        }
    }
}