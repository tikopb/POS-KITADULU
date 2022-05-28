let { Product } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
    CreateProduct: async (req,res) => {
        const {name, description, org, client, uom_id, productCategories_id} = req.body
        Product.findAll({
            where: {
                name: name,
                org_id: org,
                client_id: client
            }
        })
        .then(function (productExist) {
            if(productExist.length > 0){
                console.log('Product Already Exist!')
                res.status(500).json({
                    msg: 'Product Already Exist!'
                })
            }else{
                try {
                    const prd = Product.register({
                        name: name,
                        description: description,
                        isActve: true,
                        org_id: org,
                        client_id: client,
                        uom_id: uom_id,
                        productCategories_id: productCategories_id
                    })
                    res.status(200).json({
                        msg:'Product Registered!'
                    })
                } catch (err) {
                    res.status(401).json({
                        msg: err.message
                    })
                }
            }            
        })
    },
    FindByValueOrName: async (req,res) => {
        
    }
}
