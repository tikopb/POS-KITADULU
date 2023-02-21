let { Role } = require('../models');
const { Op } = require("sequelize");

module.exports = {
    /**
     * getting all data of org with client_id as paramter
     * @param {*} req 
     * @param {*} res 
     */
    Index: async(req,res) => {
        let UserCrd = req.user
        try {
           let data = await Role.findAll({
                where:{
                    client_id: UserCrd.Client_id,
                }
            })
            res.status(200).json({
                status: 'succsess',
                msg: 'Get Succsess',
                data
            })
        } catch (err) {
            res.status(500).json({
                status: 'erorr',
                err: `${err.toString()}`,
            })
        }
    },
    /**
    * Getting data of Roles with Role_id as parameter
    * @param {*} req 
    * @param {*} res 
    */
    Show: async(req,res) => {
        const role_id = req.params.id;
        let data = await Role.findByPk(role_id)
        res.status(200).json({
            status: 'succsess',
            msg: 'get succsess',
            data
        })
    },
    /**
     * Generate data of org with client_id as data variabel
     * @param {*} req 
     * @param {*} res 
     */
    Create: async(req, res) => {
        const param = req.body;
        const UserCrd = req.user
        try {
            console.log(param)
            let data = await Role.create({
                name: param.name,
                description: param.description,
                isactive: true,
                client_id: UserCrd.Client_id,
                org_id: param.Org_id,
                isadmin: param.isadmin
            })
            res.status(200).json({
                status: 'succsess',
                msg: 'Roles registered',
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ status: 'error', msg: `Roles with name ${param.name} already exists`});
            } else {
                res.status(500)
                res.send({ status: 'error', msg: `Something went wrong: ${err.message}`});
            }
        }
    },
    /**
     * Updating data of org with Role_id as parameter.
     * @param {*} req 
     * @param {*} res 
     */
    Update: async(req,res) => {
        const Role_id = req.params.id;
        let param = req.body
        let data = await Role.findByPk(Role_id)
        try {
            if(data == null){
                throw new Error('data no found');
            }
            data.set({
                name: param.name,
                description: param.description,
                isactive: param.isactive,
                isadmin: param.isadmin
            })
            await data.save()
            res.status(200).json({
                status: 'succsess',
                msg: 'Roles updated',
                data    
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ status: 'error', msg: `Roles with name ${param.name} already exists`});
            } else {
                res.status(500)
                res.send({ status: 'error', msg: `Something went wrong ${err.message}`});
            }
        }
    },
    /**
     * Deleting data of Roles but this function can't use when data Role_id already constraint to other table
     * @param {*} req 
     * @param {*} res 
     */
    Delete: async(req,res) => {
        const Role_id = req.params.id;
        let data = await Role.findByPk (Role_id);
        try {
            if(data == null){
                throw new Error('data no found');
            }
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