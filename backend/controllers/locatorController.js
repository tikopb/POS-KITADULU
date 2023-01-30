let {Locator, Warehouse} = require("../models");

module.exports = {
    /**
    * Getting all data from Locator
    * @param {*} req 
    * @param {*} res 
    */
    Index: async(req,res) => {
        const UserCrd = req.user
        let data = await Locator.findAll({
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
     * Get data of locator with id parameter
     * @param {*} req 
     * @param {*} res 
     */
    Show: async(req,res) => {
        const locator_id = req.params.id
        let data = await Locator.findByPk(locator_id)
        res.status(200).json({
            status: 'succsess',
            msg: 'get data succsess',
            data
        })
    },
    /**
     * Creating locator data
     * Get warehouse first and save the locator data
     * @param {*} req 
     * @param {*} res 
     */
    Create: async(req,res) => {
        let bodyV = req.body
        let userCrd = req.user
        try {
            let warehouse = await Warehouse.findByPk(bodyV.warehouse_id);
            console.log(warehouse)
            let data = await Locator.create({
                name: bodyV.name,
                description: bodyV.description,
                isactive: true,
                org_id: warehouse.org_id,
                warehouse_id: warehouse.Warehouse_id,
                client_id: userCrd.Client_id
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
                    msg: `Something went wrong ${err.message}`
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
        const locator_id = req.params.id
        try {
            let data = await Locator.findByPk(locator_id)
            data.set({
                name: bodyV.name,
                description: bodyV.description,
                isactive: bodyV.isactive
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
    /**
     * function to delete the data of locator
     * @param {*} req 
     * @param {*} res 
     */
    Delete: async(req,res) =>{
        const locator_id = req.params.id
        let data = await Locator.findByPk(locator_id)
        try {
            if(data == null){
                throw new Error('data no found');
            };
            let name = data.name
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