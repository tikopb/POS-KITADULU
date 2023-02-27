let { ProductCategory, Client, org } = require('../models');

module.exports = {
    /**
     * Getting all data with client_id as data variabel
     * @param {*} req 
     * @param {*} res 
     */
    Index: async(req,res) => {
        const UserCrd = req.user;
        ProductCategory.findAll({
            where: {
                client_id: UserCrd.client_id
            }
        }).then(function (data) {
            if(data.length > 0 ){
                res.status(200).json({
                    status: 'succsess',
                    msg: 'data get succsess',
                    data 
                })
            }else{
                res.status(200).json({
                    status: 'succsess',
                    msg: "product category not exist",
                    data
                })
            }
        })
    }, 
    /**
     * Get data of product category with product categories_id as parameter
     * @param {*} req 
     * @param {*} res 
     */
    Show: async (req,res) => {
        const ProductCategories_id = req.params.id;
        let data = await ProductCategory.findByPk(ProductCategories_id)
        res.status(200).json({
            status: 'succsess',
            msg: 'Get data Sucsess',
            data
         })
    },
    /**
     * Creating the product data base on body for variabel
     * @param {*} req 
     * @param {*} res 
     */
    Create: async(req,res) => {
        const {name, description} = req.body
        const UserCrd = req.user
        try {
            let data = await ProductCategory.create({
                name: name,
                description: description,
                isactive: true,
                org_id: UserCrd.Org_id,
                client_id: UserCrd.client_id
            })
            res.status(201).json({
                status: 'succsess',
                msg: 'get data succsess',
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ 
                    status: 'error', 
                    msg: `Product Category with value ${name} already exists`
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
     * updating data of product category with client data as variabel
     * @param {*} req 
     * @param {*} res 
     */
    Update: async(req,res) => {
        const ProductCategories_id = req.params.id;
        const { name, description, isactive} = req.body
        let data = await ProductCategory.findByPk(ProductCategories_id)
        try {
            if(data == null){
                throw new Error('data no found');
            };
            data.set({
                name: name,
                description: description,
                isactive: isactive
            })
            await data.save()
            res.status(200).json({
                status: 'succsess',
                msg: 'data Updated',
                data
            })
        } catch (err){
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ 
                    status: 'error', 
                    msg: `Product Category with value ${name} already exists`
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
     * deleting data of product category
     * @param {*} req 
     * @param {*} res 
     */
    Delete: async(req,res) => {
        const ProductCategories_id = req.params.id;
        let data = await ProductCategory.findByPk(ProductCategories_id)
        try {
            if(data == null){
                throw new Error('data no found');
            };
            await data.destroy()
            res.status(200).json({
                status: 'succsess',
                msg: 'data deleted'
            })
        } catch(err){
            res.status(401).json({
                status: 'erorr',
                msg: err.message
            })
        }
    }
}