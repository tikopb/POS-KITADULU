let { Product, Org, Client } = require('../models');
const { Op } = require("sequelize");


function GetProduct(nama, barcode, org_id, client_id) {
    const clientM = Client.GetClient(client_id)
    let product = null;
    product = Product.findAll({
        where: {
            [Op.or]: [
                {
                    org_id: clientM.org_id, 
                    client_id: clientM.client_id, 
                    name: nama
                },
                {
                    org_id: clientM.org_id, 
                    client_id: clientM.client_id, 
                    barcode: barcode
                }
            ]
        }
    })
    return product
}

module.exports = {
    Get: async (req,res) => {
        /*
            DOD:
                1 Getting product by value (name) or by barcode with org client instance
                2 Giving erorr when faild get data 
                3 Bring back the product as object
        */
        const {name, barcode, org, client} = req.body
        const product = await GetProduct(name, barcode, org, client)
        if(product == null || product.length === 0 ){
            res.status(500).json({
                msg: 'Product Not Found'
            })
        }else{
            res.status(200).json({
                productInformation: JSON.stringify(product),
                msg: 'succsess get product'
            })
        }
    },
    CreateProduct: async (req,res) => {
        /* 
            DOD: 
                1 search product by name first
                2 if found product then bring back erorr when product is already exist
                3 if not found then create product if point 2 is true then bring information into json
        */
        const {name, description, org_id, client_id, uom_id, productCategories_id} = req.body
        Product.findAll({
            where: {
                name: name,
                client_id: client_id
            }
        })
        .then(function (productExist) {
            if(productExist.length > 0){
                res.status(500).json({
                    msg: 'Product Already Exist!'
                })
            }else{
                try {
                    const prd = Product.create({
                        name: name,
                        description: description,
                        isactive: true,
                        org_id: org_id,
                        client_id: client_id,
                        uom_id: uom_id,
                        ProductCategories_id: productCategories_id
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
    UpdateProduct: async (req,res) => {
        const {name, barcode, org, client, uom_id, productCategories_id} = req.body
        let valueProduct = await GetProduct(name, barcode, org, client)
        valueProduct.set({
            name: name,
            barcode: barcode,
            uom_id: uom_id,
            productCategories_id: productCategories_id
        })
        try {
            await valueProduct.save()
            res.status(200).json({
                msg: 'product updated'
            })
        } catch (err) {
            res.status(401).json({
                msg: err.message
            })
        }
    },
    DeleteProduct: async (req,res) => {
        const {name, barcode, org, client} = req.body
        const valueProduct = await GetProduct(name, barcode, org, client)
        try {
            await valueProduct.destroy()
            res.status(200).json({
                msg: 'product deleted'
            })
        } catch (err) {
            res.status(401).json({
                msg: err.message
            })
        }
    },
    getAllProductForPOSJoin: async (req,res) => {
        const clientM = await Client.GetClient(req.body.client_id)
        Product.findAll({
            where: {
                client_id: clientM.Client_id,
                isactive: true
            }
        }).then(function (productData) {
            res.status(200).json({
                productData,
                msg: "Product Get Succsess"
            })
        })
    }
}
