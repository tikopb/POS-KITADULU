let {Locator} = require("../models");

module.exports = {
    /** Getting data of locator  as parameter
     * 
    */
   Get: async(req,res) => {
    const Locator_id = req.body.Locator_id
    let data = await Locator.findByPk(Locator_id)
    res.status(200).json({
        status: 'succsess',
        msg: 'get data succsess',
        data
    })
   },
   /**
    * Getting all data from Locator
    * @param {*} req 
    * @param {*} res 
    */
   GetAll: async(req,res) => {
    let param = req.body
    let data = await Locator.findAll({})
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
        let data = await Locator.Create({
            name: bodyV.name,
            description: bodyV.description,
            isactive: true,
            org_id: bodyV.org_id,
            client_id: userCrd.client_id
        })
        res.status(200).json({
            status: 'succsess',
            msg: 'Locator Generated',
            data
        })
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(403)
            res.send({ 
                status: 'error', 
                msg: `Locator with name ${bodyV.name} already exists`
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
    * Updating data of Locator
    * @param {*} req 
    * @param {*} res 
    */
   Update: async(req,res) => {
    let bodyV = req.body
    let userCrd = req.user
    try {
        let data = await Locator.findByPk(bodyV.Locator_id)
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
            msg: 'Locator updated',
            data
        })
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(403)
            res.send({ 
                status: 'error', 
                msg: `Locator with name ${bodyV.name} already exists`
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
    const{Locator_id} = req.body
    let data = await Locator.findByPk(Locator_id)
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