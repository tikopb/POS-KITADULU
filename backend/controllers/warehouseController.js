let {Warehouse} = require("../models");

module.exports = {
    /**
    * Getting all data from warehouse
    * @param {*} req 
    * @param {*} res 
    */
   Index: async(req,res) => {
    const UserCrd = req.user
    let data = await Warehouse.findAll({
        where:{
            client_id: UserCrd.Client_id,
        }
    })
    res.status(200).json({
        status: `succsess`, 
        msg: `get data succsess`,
        data
    })
   },
    /**
     * Getting data with warehouse_id as parameter
     * @param {*} req 
     * @param {*} res 
     */
   Show: async(req,res) => {
    const warehouse_id = req.params.id
    let data = await Warehouse.findByPk(warehouse_id)
    res.status(200).json({
        status: 'succsess',
        msg: 'get data succsess',
        data
    })
   },
    /**
     * Creating warhouse data
     * @param {*} req 
     * @param {*} res 
     */
    Create: async(req,res) => {
        let bodyV = req.body
        let userCrd = req.user
        try {
            let data = await Warehouse.create({
                name: bodyV.name,
                description: bodyV.description,
                isactive: true,
                org_id: userCrd.Org_id,
                client_id: userCrd.Client_id
            })
            res.status(200).json({
                status: 'succsess',
                msg: 'Warehouse Generated',
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ 
                    status: 'error', 
                    msg: `Warehouse with name ${bodyV.name} already exists`
                });
            } else {
                res.status(500)
                res.send({ 
                    status: 'error', 
                    msg: `Something went wrong ${err.message}`
                });
            }
        }
    },
    /**
    * Updating data of warehouse
    * @param {*} req 
    * @param {*} res 
    */
    Update: async(req,res) => {
        let bodyV = req.body
        let userCrd = req.user
        const warehouse_id = req.params.id
        try {
            let data = await Warehouse.findByPk(warehouse_id)
            data.set({
                name: bodyV.name,
                description: bodyV.description,
                isactive: true,
                org_id: bodyV.org_id,
                client_id: userCrd.client_id
            })
            await data.save()
            res.status(200).json({
                status: 'succsess',
                msg: 'Warehouse updated',
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ 
                    status: 'error', 
                    msg: `Warehouse with name ${bodyV.name} already exists`
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
    Delete: async(req,res) =>{
        const warehouse_id = req.params.id
        let data = await Warehouse.findByPk(warehouse_id)
        let name = data.name
        try {
            await data.destroy()
            res.status(200).json({
                status: `success`,
                msg:`data ${name}  success deleted`
            })
        } catch (err) {
            res.status(401).json({
                status: `erorr`,
                msg: err.message
            })
        }
    }
}