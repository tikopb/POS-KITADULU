let { Org } = require('../models');
const { Op } = require("sequelize");

module.exports = {
    Get: async(req,res) => {
        let data = await Org.findByPk(req.body.Org_id)
        res.status(200).json({
            status: 'succsess',
            msg: 'get succsess',
            data
        })
    },
    GetAll: async(req,res) => {
        let UserCrd = req.user
        try {
            Org.findAll({
                where:{
                    client_id: UserCrd.Client_id,
                    isactive: true
                }
            }).then(function(data){
                res.status(200).json({
                    status: 'succsess',
                    msg: 'Get Succsess',
                    data
                })
            })
        } catch (err) {
            res.status(500).json({
                status: 'erorr',
                err: `${err.toString()}`,
            })
        }
    },
    Generate: async(req, res) => {
        const {name, description, address} = req.body;
        const UserCrd = req.user
        try {
            let data = await Org.create({
                name: name,
                description: description,
                isactive: true,
                client_id: UserCrd.Client_id,
                address: address
            })
            res.status(200).json({
                status: 'succsess',
                msg: 'Organization registered',
                data
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
    Update: async(req,res) => {
        const {name, description, address, org_id, isactive} = req.body;
        let orgData = client.findByPk(org_id)
        try {
            let data = await orgData.set({
                name: name,
                description: description,
                address: address,
                isactive: isactive
            })
            await orgData.save()
            res.status(200).json({
                status: 'succsess',
                msg: 'organization updated',
                data
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
    Delete: async(req,res) => {
        const {Org_id} = req.body
        let data = await Org.findByPk(Org_id)
        try {
            await data.destroy()
            res.status(200).json({
                status: 'succsess',
                msg:'data deleted'
            })
        } catch (err) {
            res.status(401).json({
                status: 'erorr',
                msg: err.message
            })
        }
    }
}