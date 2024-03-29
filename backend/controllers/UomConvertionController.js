let { uomconvertion, Org, Client, Product } = require('../models')

module.exports = {
    /**
     * Getting data of uom convertion with uomconvertion_id as parameter
     * @param {*} req 
     * @param {*} res 
     */
    Get: async(req,res) => {
        const UomConvertion_id = req.body.UomConvertion_id
        const UserCrd = req.user
        let data = await uomconvertion.findAll({
            where:{
                UomConvertion_id: UomConvertion_id
            }
        })
        res.status(200).json({
            status: 'succsess',
            msg: 'get data succsess',
            data
        })
    },
    /**
     * Getting all data of product uom convertion of product with concern product_id and client_id
     * @param {*} req 
     * @param {*} res 
     */
    GetAllBasePropduct: async(req, res) => {
        const {Product_id} = req.body
        const {Client_id} = req.user.Client_id
        const clientM = await Client.getClient(Client_id)
        uomconvertion.findAll({
            where: {
                Product_id: Product_id, 
                Client_id: clientM.Client_id,
                isactive: true
            }
        }).then(function(data) {
            res.status(200).json({
                status: 'succsess',
                msg: 'get data succsess',
                data
            })
        })
    },
    /**
     * Creating data of uom convertion with concern of product_id 
     * @param {*} req 
     * @param {*} res 
     */
    Create: async(req, res) => {
        const {Product_id, uom_id, qtyConvertion} = req.body
        const {Client_id} = req.user.Client_id
        let product = await Product.findByPk(Product_id);
        try {     
            uomconvertion.create({
                name: product.name,
                product_id: product.product_id,
                client_id: Client_id,
                uom_id: uom_id,
                qtyConvertion: qtyConvertion
            }).then(function (data){
                res.status(200).json({
                    status: 'succsess',
                    msg: 'get data succsess',
                    data
                })
            })
        } catch (err) {
            res.status(200).json({
                status: 'succsess',
                msg: `erorr of ${err.toString()} `
            })
        }
    },
    /**
     * update data of uom convertion with uomconvertion_id as parameter data
     * @param {*} req 
     * @param {*} res 
     */
    Update: async(req,res) => {
        const {UomConvertion_id, uom_id, qtyConvertion } = req.body
        let data = await uomconvertion.findByPk(UomConvertion_id)
        data.Update({
            uom_id: uom_id,
            qtyConvertion: qtyConvertion
        })
        try {
            await data.save()
            res.status(200).json({
                status: 'succsess',
                msg: 'data updated',
                data
            })
        } catch (err) {
            res.status(401).json({
                msg: err.message
            })
        }        
    },
    /**
     * Delete data of uomconvertion with uomconvertion_id as parameter 
     * @param {*} req 
     * @param {*} res 
     */
    Delete: async(req,res) => {
        const {UomConvertion_id} = req.body
        let data = await uomconvertion.findByPk(UomConvertion_id)
        try {
            await data.destroy()
            res.status(200).json({
                status: 'succsess',
                msg: 'data deleted'
            })
        } catch (err) {
            res.status(401).json({
                status: 'erorr',
                msg: err.message
            })
        }    
    }
}