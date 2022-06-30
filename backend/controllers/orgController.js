let { Org } = require('../models');
const { Op } = require("sequelize");

module.exports = {
    GenerateOrganization: async(req, res) => {
        const {name, description, address, client_id} = req.body;
        org.findOne({
            where:{
                name: name,
                client_id: client_id
            }
        })
        .then(function (orgValue){
            if(orgValue.length > 0 ){
                console.log('Organization exist')
                res.status(500).json({
                    msg: 'Organization Exist'
                })
            }
        })
        try {
            let orgSave = await org.create({
                name: name,
                description: description,
                isactive: true,
                client_id: client_id,
                address: address
            })
            res.status(200).json({
                msg: 'Organization registered'
            })
        } catch (err) {
            res.status(500).json({
                msg: err.message
            })
        }
    },
    UpdateOrganization: async(req,res) => {
        const {name, description, address, org_id} = req.body;
        let orgData = client.findByPk(org_id)
        try {
            orgData.set({
                name: name,
                description: description,
                address: address
            })
            await orgData.save()
            res.status(200).json({
                msg: 'organization updated'
            })
        } catch (err) {
            res.status(401).json({
                msg: err.message
            })
        }
    }
}