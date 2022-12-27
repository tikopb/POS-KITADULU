let {Uom, Client, Org} = require('../models') 

module.exports = {
    /**
     * Getting data uom with ID
     * @param {Uom_id} req  
     */
    Get: async(req,res) => {
        let data = await Uom.findByPk(req.body.Uom_id)
        res.status(200).json({
            status: 'succsess',
            msg: 'get data succsess',
            data
        })
    },
    /**
     * Getting all data base on client id is active return data to list of uom
     * @param {client_id} req 
     */
    GetAll: async(req,res) => {
        const UserCrd = req.user
        try {
            Uom.findAll({
                where:{
                    client_id: UserCrd.Client_id,
                    isactive: true
                }
            }).then(function(data){
                res.status(200).json({
                    status: 'sucsess', 
                    msg: `get data succsess`,
                    data
                })
            })
        } catch (err) {
            res.status(500).json({
                status: 'erorr', 
                msg: `${err.toString()}`,
            })
        }
    },
    /**
     * Creating data of uom
     * @param {client_id, name, description, org_id, client_id} client_id 
     * @param {*} res 
     */
    Create: async(req,res) => {
        const {name, description} = req.body
        const UserCrd = req.user
        try {
            let data = await Uom.create({
                client_id: UserCrd.Client_id,
                org_id: UserCrd.Org_id,
                name: name,
                description: description,
                isactive: true
            })
            res.status(200).json({
                status: 'sucsess', 
                msg: `get data succsess`,
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ status: 'error', msg: `Uom with value ${name} already exists`});
            } else {
                res.status(500)
                res.send({ status: 'error', msg: "Something went wrong"});
            }
        }
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
                status:'succsess',
                msg: 'data updated',
                data
            })
        } catch (err) {
            res.status(401).json({
                status:'erorr',
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
                status:'succsess',
                msg:'data deleted'
            })
        } catch (err) {
            res.status(401).json({
                status:'erorr',
                msg: err.message
            })
        }
    }
}