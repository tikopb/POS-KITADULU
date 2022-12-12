let { ProductCategory, Client, org } = require('../models');

module.exports = {
    Create: async(req,res) => {
        const {name, description , user_id} = req.body
        const UserCrd = req.user
        ProductCategory.create({
            name: name,
            description: description,
            isactive: true,
            org_id: UserCrd.Org_id,
            client_id: UserCrd.Client_id
        }).then(function (data) {
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
                    msg: "Something went wrong"
                });
            }
        })
    },
    GetAll: async(req,res) => {
        const UserCrd = req.user
        ProductCategory.findAll({
            where: {
                client_id: UserCrd.Client_id
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