let { Product, Org, Client, UomConvertion } = require('../models');
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
    /**
     * Getting some of product with name as param search or barcode (SKU)
     * @param {name, barcode, org, client} req - mandatory
     * @param {productInformation, msg} res - respon to frontend
     */
    Get: async (req,res) => {
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
    /**
     * Getting name of product first if null then creating product with description from req.body. this process will generate product and product.uomconvertion as default UOM
     * @param {name, description, org_id, client_id, uom_id, productCategories_id} req - mandtory
     * @param {prd, msg} res - respon return
     */
    CreateProduct: async (req,res) => {
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
    /**
     * Updating product with name product as parameter with concidert of client of data. 
     * @param { nama, org, client, uom_id, productCategories_id} req - mandatory field
     * @param {msg} res
     */
    UpdateProduct: async (req,res) => {
        const {name, org, client, uom_id, productCategories_id} = req.body
        let valueProduct = await GetProduct(name, barcode, org, client)
        valueProduct.set({
            name: name,
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
    /**
     * Deleting product with name product as parameter with consider of client id data. 
     * @param { nama, barcode, org, client, uom_id, productCategories_id} req - mandatory field
     * @param {msg} res
     */
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
    /**
     * use for get product id and value for local storage front end when pos menu is acsseted
     * @param {client_id} req - magatory
     * @param {productData, msg} res 
     */
    getAllProductForPOSJoin: async (req,res) => {
        const clientM = await Client.GetClient(req.body.client_id)
        Product.findAll({
            where: {
                client_id: clientM.Client_id,
                isactive: true
            },
            attributes: ['Product_id', 'name']
        }).then(function (productData) {
            res.status(200).json({
                productData,
                msg: "Product Get Succsess"
            })
        })
    }
}
