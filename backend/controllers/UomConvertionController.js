let { uomconvertion, Org, Client, Product } = require('../models')

module.exports = {
    GetAllBasePropduct: async(req, res) => {
        const {org_id, client_id, Product_id} = req.body
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
    }
}