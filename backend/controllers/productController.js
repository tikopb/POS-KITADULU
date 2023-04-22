let { Product, Org, Client, UomConvertion } = require('../models');
const { Op } = require("sequelize");
let Pagination = require('./pagination/pagination');    

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

async function GenerateValue() {
    const value = await sequelize.Sequelize.literal("nextval('product_id_seq')");
    return value;
}

module.exports = {
    /**
     * Getting all data off product with req.user.client_id login as parameter
     * @param {*} req 
     * @param {*} res 
     */
    Index: async(req,res) =>{
        const pagination = new Pagination(); //class decalare
        const metadata = await pagination.PaginationGet(req,productcategory.tableName);
        const whereMap = await pagination.GetWhereMapOrm(req); 

        const data = await Product.findAll({
            where: whereMap,
            limit: metadata.limit,
            offset: metadata.offset
        })
        res.status(200).json({
            status: `succsess`,
            msg: `get data succsess`,
            data 
        })
    },
    /**
     * show data with product_id as default parameter return will be get data of product 
     * @param {id} req 
     * @param {*} res 
     */
    Show: async(req,res) => {
        const product_id = req.params.id;
        const data = await Product.findByPk(product_id) 
        res.status(200).json({
            status: `succsess`,
            msg: `get data with id succsess`,
            data
        })
    },
    /**
     * Creating product data 
     * @param {name, description, org_id, client_id, uom_id, productCategories_id, value} req 
     * @param {*} res 
     */
    Create: async (req,res) => {
        const {name, description, org_id, client_id, uom_id, productCategories_id, value} = req.body
        const valueP = value;
        if(valueP === null ){
            valueP = await GenerateValue();
        }
        try {
            const data = await Product.create({
                name: name,
                description: description,
                isactive: true,
                org_id: org_id,
                client_id: client_id,
                uom_id: uom_id,
                ProductCategories_id: productCategories_id,
                value: valueP
            })
            res.status(200).json({
                status: `succsess`,
                msg: `Product generated`,
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ 
                    status: 'error', 
                    msg: `Product with value ${valueP} already exists`
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
     * Updating product with value
     * @param {*} req 
     * @param {*} res 
     */
    Update: async (req,res) => {
        const product_id = req.params.id;
        const {name, uom_id, productCategories_id, description} = req.body
        let data = await Product.findByPk(product_id);
        try {
            if(data == null){
                throw new Error('data no found');
            };
            data.set({
                name: name,
                uom_id: uom_id,
                productCategories_id: productCategories_id,
                description: description
            });
            await data.save();
            res.status(200).json({
                status: `succsess`,
                msg: `Product Updated`,
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ 
                    status: 'error', 
                    msg: `Product with value ${valueP} already exists`
                });
            } else {
                res.status(500)
                res.send({ 
                    status: 'error', 
                    msg: `Something went wrong ${err}`
                });
            }
        }
    },
    Delete: async(req,res) => {
        const product_id = req.params.id;
        try {
            const data = await Product.findByPk(product_id)
            await data.destroy()
            res.status(200).json({
                status: 'succsess', 
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
