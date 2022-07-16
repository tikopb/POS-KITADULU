let { ProductCategory, Org, Client } = require('../models')

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
            console.log(data)
            if(data.length > 0){
                res.status(200).json({
                    data,
                    msg: "Product Category Generated"
                })
            }else{
                res.status(401).json({
                    msg: "Product Category Failed"
                })
            }
        })
    },
    GetAll: async(req,res) => {
        const {org_id, client_id} = req.body
        const orgM = await Client.getClient( client_id)
        ProductCategory.findAll({
            where: {
                org_id: orgM.Org_id,
                client_id: orgM.client_id,
                isactive: true
            }
        }).then(function (productCategory) {
            if(productCategory.length > 0 ){
                res.status(200).json({
                    msg: 'data get succsess',
                    orgM,
                    productCategory 
                })
            }else{
                res.status(200).json({
                    msg: "product category not exist"
                })
            }
        })
    }
}