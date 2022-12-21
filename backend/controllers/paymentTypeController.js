let { Paymenttype } = require('../models');
const { Op } = require("sequelize");
const paymenttype = require('../models/paymenttype');


module.exports = {
    Get: async(req,res) => {
        let data = await Paymenttype.findByPk(req.body.PaymentType_id)
        res.status(200).json({
            status: 'succsess',
            data
        })
    },
    GetAll: async(req,res) => {
        let UserCrd = req.user
        try {
            Paymenttype.findAll({
                where:{
                    client_id: UserCrd.client_id,
                    isactive: true
                }
            }).then(function(data){
                res.status(200).json({
                    status: 'succsess',
                    data
                })
            })
        } catch (err) {
            res.status(500).json({
                status: 'erorr',
                err: `${err.toString()}`
            })
        }
    },
    Generate: async(req,res) => {
        const {name, description, org_id} = req.body
        const UserCrd = req.user
        try {
            let data = await Paymenttype.create({
                name: name,
                description: description,
                isactive: true,
                org_id: org_id,
                client_id: UserCrd.Client_id,
                createdBy: UserCrd.userId,
                updatedBy: UserCrd.userId
            })
            res.status(200).json({
                msg: 'Paymenttype registered',
                status: 'succsess',
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ status: 'error', msg: `Paymenttype with name ${name} already exists`});
            } else {
                res.status(500)
                res.send({ status: 'error', msg: "Something went wrong"});
            }
        }
    },
    Update: async(req,res) => {
        const {name, description, org_id, PaymentType_id} = req.body
        const UserCrd = req.user
        let data = paymenttype.findByPk(PaymentType_id)
        try {
            data.set({
                name: name,
                description: description,
                isactive: true,
                org_id: org_id,
                client_id: UserCrd.Client_id,
                createdBy: UserCrd.userId,
                updatedBy: UserCrd.userId
            })
            await data.save()
            res.status(200).json({
                status: 'succsess',
                msg: 'Paymenttype updated',
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ 
                    status: 'error', 
                    msg: `Paymenttype with name ${name} already exists`
                });
            } else {
                res.status(500)
                res.send({ 
                    status: 'error', 
                    msg: "Something went wrong"
                });
            }
        }
    },
    Delete: async(req,res) => {
        const{PaymentType_id} = req.body
        let data = paymenttype.findByPk(PaymentType_id)
        try {
            await data.destroy()
            res.status(200).json({
                status: 'succsess',
                msg:'data deleted'
            })
        } catch (err) {
            res.status(401).json({
                msg: err.message
            })
        }
    }
}