let { ProductCategory } = require('../models')
let { org } = require('./orgController')

module.exports = {
    GetAll: async(req,res) => {
        const {org_id, client_id} = req.body
        const orgM = await org.GetOrganization(org_id, client_id)
        ProductCategory.findAll({
            wwhere: {
                org_id: orgM.org_id,
                client_id: orgM.client_id
            }
        }).then(function (data) {
            if(data.length > 0 ){
                res.status(200).json({
                    data
                })
            }else{
                res.status(200).json({
                    msg: "product category not exist"
                })
            }
        })
    },
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
    }
}