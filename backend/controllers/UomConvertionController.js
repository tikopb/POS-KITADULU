let { uomconvertion, Org, Client, Product } = require('../models')

module.exports = {
    GetAllBasePropduct: async(req, res) => {
        const {client_id, Product_id} = req.body
        const clientM = await Client.getClient(client_id)
        uomconvertion.findAll({
            where: {
                Product_id: Product_id, 
                client_id: clientM.client_id,
                isactive: true
            }
        }).then(function(uomConvertionData) {
            res.status(200).json({
                uomConvertionData
            })
        })
    },
    Create: async(req, res) => {
        const { client_id, Product_id, uom_id, qtyConvertion} = req.body
        let product = await Product.findByPk(Product_id);
        uomconvertion.create({
            name: product.name,
            product_id: product.product_id,
            client_id: client_id,
            uom_id: uom_id,
            qtyConvertion: qtyConvertion
        }).then(function (data){
            res.status(200).json({
                data,
                msg:'uom convertion generated'
            })
        })
    },
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
                data,
                msg: 'data updated'
            })
        } catch (err) {
            res.status(401).json({
                msg: err.message
            })
        }        
    },
    Delete: async(req,res) => {
        const {UomConvertion_id} = req.body
        let data = await uomconvertion.findByPk(UomConvertion_id)
        try {
            await data.destroy()
            res.status(200).json({
                msg: 'data deleted'
            })
        } catch (err) {
            res.status(401).json({
                msg: err.message
            })
        }    
    }
}