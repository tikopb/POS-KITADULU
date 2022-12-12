let {Uom, Client, Org} = require('../models') 

module.exports = {
    /**
     * Getting data uom with ID
     * @param {Uom_id} req  
     */
    Get: async(req,res) => {
        let data = await Uom.findByPk(req.body.Uom_id)
        res.status(200).json({
            data
        })
    },
    /**
     * Getting all data base on client id is active return data to list of uom
     * @param {client_id} req 
     */
    GetAll: async(req,res) => {
        const {client_id} = req.body
        try {
            Uom.findAll({
                where:{
                    client_id: client_id,
                    isactive: true
                }
            }).then(function(data){
                res.status(200).json({
                    data
                })
            })
        } catch (err) {
            res.status(500).json({
                err: `${err.toString()}`,
            })
        }
    },
    /**
     * Creating data of uom
     * @param {client_id, name, description, org_id, client_id} client_id 
     * @param {*} res 
     */
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
    /**
     * updating data of uom data with uom_id as parameter mandatory
     * @param {Uom_id, name, description, isactive} req 
     * @param {msg, data} res 
     */
    Update: async(req,res) => {
        const {Uom_id, name, description, isactive} = req.body
        let data = await Uom.findByPk(Uom_id)
        console.log('uom' + data)
        data.set({
            name: name,
            description: description,
            isactive: isactive
        })
        try {
            await data.save()
            res.status(200).json({
                data,
                msg: 'data updated'
            })
        } catch (err) {
            res.status(401).json({
                msg: err.message
            })
        }
    },
    /**
     * Deleting data base on uom_id
     * @param {uom_id} req 
     * @param {*} res 
     */
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