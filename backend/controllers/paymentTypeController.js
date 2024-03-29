let { Paymenttype } = require('../models');
const { Op } = require("sequelize");
const paymenttype = require('../models/paymenttype');


module.exports = {
    /**
     * Getting data of or payment type with payment type_id as parameter
     * @param {*} req 
     * @param {*} res 
     */
    Get: async(req,res) => {
        let data = await Paymenttype.findByPk(req.body.PaymentType_id)
        res.status(200).json({
            status: 'succsess',
            msg: 'get success',
            data
        })
    },
    /**
     * Getting all data of payment type with client_id as parameter
     * @param {*} req 
     * @param {*} res 
     */
    GetAll: async(req,res) => {
        let UserCrd = req.user
        try {
            Paymenttype.findAll({
                where:{
                    client_id: UserCrd.client_id
                }
            }).then(function(data){
                res.status(200).json({
                    status: 'succsess',
                    msg: 'get succsess',
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
    /**
     * Generate data of payment type with client_id as parameter
     * @param {*} req 
     * @param {*} res 
     */
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
                status: 'succsess',
                msg: 'Paymenttype registered',
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
    /**
     * Update payment type data with paymenttype_id as mandatory variabel
     * @param {*} req 
     * @param {*} res 
     */
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
    /**
     * delete data of paymenttype with paymenttype_id as paramter!
     * @param {*} req 
     * @param {*} res 
     */
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
                status: 'erorr',
                msg: err.message
            })
        }
    }
}