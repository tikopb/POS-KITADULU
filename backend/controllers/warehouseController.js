let {Warehouse} = require("../models");

module.exports = {
    /** Getting data of warehouse as parameter
     * 
    */
   Get: async(req,res) => {
    const Warehouse_id = req.body.warehouse_id
    let data = await Warehouse.findByPk(Warehouse_id)
    res.status(200).json({
        status: 'succsess',
        msg: 'get data succsess',
        data
    })
   },
   /**
    * Getting all data from warehouse
    * @param {*} req 
    * @param {*} res 
    */
   GetAll: async(req,res) => {
    let param = req.body
    let data = await Warehouse.findAll({
        where:{
            Warehouse_id: param.warehouse_id
        }
    })
    res.status(200).json({
        status: `succsess`, 
        msg: `get data succsess`,
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
        let data = await Warehouse.Create({
            name: bodyV.name,
            description: bodyV.description,
            isactive: true,
            org_id: bodyV.org_id,
            client_id: userCrd.client_id
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
                msg: "Something went wrong"
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
    try {
        let data = await Warehouse.findByPk(bodyV.warehouse_id)
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
    const{Warehouse_id} = req.body
    let data = await Warehouse.findByPk(Warehouse_id)
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