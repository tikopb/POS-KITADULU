let { Orgaccsess } = require('../models');
const { Op } = require("sequelize");

module.exports = {
    Generate: async(req,res) => {
        const payload = req.body
        const UserCrd = req.user
        try {
            let data = await Orgaccsess.create({
                isactive: true,
                org_id: payload.org_id,
                client_id: UserCrd.Client_id,
                user_id: payload.user_id
            })
            res.status(200).json({
                status: 'succsess',
                msg: 'Orgaccsess Generated',
                data
            })
        } catch (err) {
            res.status(500).json({
                msg: err.message
            })
        }
    },
    /**
     * Get all with user id accsess org with user id parameter
     * @param {user_id} req 
     * @param {*} res 
     */
    GetAll: async(req,res) => {
        const payload = req.body
        Orgaccsess.findAll({
            where: {
                user_id: payload.user_id
            }
        }).then(function(data) {
            res.status(200).json({
                status: 'succsess',
                msg: `get succsess`,
                data
            })
        })   
    },
    /**
     * uodating the OrgAcsess with id PK as parameter
     * @param (OrgAccess_id) req
     */
    Update: async(req,res) => {
        const payload = req.body
        let data = await Orgaccsess.findByPk(payload.OrgAccess_id)
        if(data==null){
            res.status(500).json({
                msg: 'data not found'
            })
        }
        data.Update({
            isactive: payload.isactive,
            org_id: payload.org_id,
            isactive: DataTypes.BOOLEAN
        })
        try {
            await data.save()
            res.status(200).json({
                status: 'succsess',
                msg: 'data udpated',
                data
            })
        } catch (err) {
            res.status(500).json({
                status: 'erorr',
                msg: err.message
            })
        }
    },
    Delete: async(req,res) => {
        const payload = req.body
        let data = await Orgaccsess.findByPk(payload.OrgAccess_id)
        try {
            data.destroy()
            res.status(200).json({
                status: 'succsess',
                msg: 'data Deleted',
            })
        } catch(err){
            res.status(401).json({
                status: 'erorr',
                msg: err.message
            })
        }
    }

}