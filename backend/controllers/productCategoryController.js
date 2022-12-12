let { ProductCategory, Client, org } = require('../models');

module.exports = {
    Create: async(req,res) => {
        const {org_id, client_id, name, description , user_id} = req.body
        ProductCategory.create({
            name: name,
            description: description,
            isactive: true,
            org_id: org_id,
            client_id: client_id
        }).then(function (data) {
            res.status(200).json({
                data,
                msg: "Product Category Generated"
            })
        })
    },
    GetAll: async(req,res) => {
        const {client_id} = req.body
        const clientM = await Client.GetClient(client_id)
        ProductCategory.findAll({
            where: {
                client_id: clientM.Client_id,
                isactive: true
            }
        }).then(function (productCategory) {
            if(productCategory.length > 0 ){
                res.status(200).json({
                    msg: 'data get succsess',
                    productCategory 
                })
            }else{
                res.status(200).json({
                    msg: "product category not exist"
                })
            }
        })
    }, 
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
                data, 
                msg: 'data Updated'
            })
        } catch (err){
            res.status(401).json({
                msg: err.message
            })
        }
    },
    Delete: async(req,res) => {
        const{ProductCategories_id} = req.body
        let data = await ProductCategory.findByPk(ProductCategories_id)
        try {
            await data.destroy()
            res.status(200).json({
                msg: 'data deleted'
            })
        } catch(err){
            res.status(401).json({
                msg: err.message
            })
        }
    }
}