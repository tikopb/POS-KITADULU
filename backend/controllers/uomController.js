let {Uom, Client, Org} = require('../models') 

module.exports = {
    Get: async(req,res) => {
        let data = await Uom.findByPk(res.body.Uom_id)
        res.status(200).json({
            data
        })
    },
    GetAll: async(req,res) => {
        const {client_id} = req.body
        const clientM = await Client.getClient(client_id)
        Uom.findAll({
            where:{
                client_id: clientM.client_id,
                isactive: true
            }
        }).then(function(data){
            res.status(200).json({
                data
            })
        })
    },
    Create: async(req,res) => {
        const {client_id, name, description, org_id} = req.body
        Uom.create({
            client_id: client_id,
            org_id: org_id,
            name: name,
            description: description,
            isactive: true
        })
        res.status(200).json({
            msg: 'uom generated'
        })
    },
    Update: async(req,res) => {
        const {Uom_id, name, description, isactive} = req.body
        Uom.Update({
            name: name,
            description: description,
            isactive: true
        }).then(function(data){
            try {
                data.save()
                res.status(200).json({
                    data,
                    msg: 'data updated'
                })
            } catch (err) {
                res.status(401).json({
                    msg: err.message
                })
            }
        })
    },
    Delete: async(req,res) => {
        const{Uom_id} = req.body
        let data = await Uom.findByPk(Uom_id)
        try {
            await data.destroy()
            res.status(200).json({
                msg:'data deleted'
            })
        } catch (err) {
            res.status(401).json({
                msg: err.message
            })
        }
    }
}