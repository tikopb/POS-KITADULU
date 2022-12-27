let { Org } = require('../models');
const { Op } = require("sequelize");

module.exports = {
    /**
     * Getting data of organization with org_id as parameter
     * @param {*} req 
     * @param {*} res 
     */
    Get: async(req,res) => {
        let data = await Org.findByPk(req.body.Org_id)
        res.status(200).json({
            status: 'succsess',
            msg: 'get succsess',
            data
        })
    },
    /**
     * getting all data of org with client_id as paramter
     * @param {*} req 
     * @param {*} res 
     */
    GetAll: async(req,res) => {
        let UserCrd = req.user
        try {
            Org.findAll({
                where:{
                    client_id: UserCrd.Client_id,
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
    /**
     * Generate data of org with client_id as data variabel
     * @param {*} req 
     * @param {*} res 
     */
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
    /**
     * Updating data of org with org_id as parameter.
     * @param {*} req 
     * @param {*} res 
     */
    Update: async(req,res) => {
        const {name, description, address, org_id, isactive} = req.body;
        let bodyV = req.body
        let data = await Org.findByPk(bodyV.Org_id)
        try {
            data.set({
                name: bodyV.name,
                description: bodyV.description,
                address: bodyV.address,
                isactive: bodyV.isactive
            })
            await data.save()
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
                res.send({ status: 'error', msg: `Something went wrong ${err.toString()}`});
            }
        }
    },
    /**
     * Deleting data of organization but this function can't use when data org_id already constraint to other table
     * @param {*} req 
     * @param {*} res 
     */
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