let { ProductCategory, Client, org } = require('../models');

module.exports = {
    /**
     * Get data of product category with product categories_id as parameter
     * @param {*} req 
     * @param {*} res 
     */
    Get: async (req,res) => {
        let bodyV = req.body
        let data = await ProductCategory.findByPk(bodyV.ProductCategories_id)
        res.status(200).json({
            status: 'succsess',
            msg: 'Get data Sucsess',
            data
         })
    },
    /**
     * Getting all data with client_id as data variabel
     * @param {*} req 
     * @param {*} res 
     */
    GetAll: async(req,res) => {
        const UserCrd = req.user
        ProductCategory.findAll({
            where: {
                client_id: UserCrd.Client_id
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
     * Creating the product data base on body for variabel
     * @param {*} req 
     * @param {*} res 
     */
    Create: async(req,res) => {
        const {name, description , user_id} = req.body
        const UserCrd = req.user
        try {
            let data = await ProductCategory.create({
                name: name,
                description: description,
                isactive: true,
                org_id: UserCrd.Org_id,
                client_id: UserCrd.Client_id
            })
            res.status(200).json({
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
                    msg: `Something went wrong ${err.toString()}`
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
        const {ProductCategories_id, name, description, isactive} = req.body
        let data = await ProductCategory.findByPk(ProductCategories_id)
        data.set({
            name: name,
            description: description,
            isactive: isactive
        })
        try {
            await data.save()
            res.status(200).json({
                status: 'succsess',
                msg: 'data Updated',
                data
            })
        } catch (err){
            res.status(401).json({
                status: 'erorr',
                msg: err.message
            })
        }
    },
    /**
     * deleting data of product category
     * @param {*} req 
     * @param {*} res 
     */
    Delete: async(req,res) => {
        const{ProductCategories_id} = req.body
        let data = await ProductCategory.findByPk(ProductCategories_id)
        try {
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