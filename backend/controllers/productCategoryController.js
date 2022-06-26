let { ProductCategory, Org } = require('../models')

function GetOrganization(org_id, client_id){
    return Org.findOne({
        where: {
            Org_id: org_id,
            client_id: client_id,
            isactive: true
        }
    }).then(data => {
        if(data != null){
            return data
        }else{
            return null
        }
    })
}

module.exports = {
    GetAll: async(req,res) => {
        const {org_id, client_id} = req.body
        const orgM = await GetOrganization(org_id, client_id)
        ProductCategory.findAll({
            where: {
                org_id: orgM.Org_id,
                client_id: orgM.client_id
            }
        }).then(function (productCategory) {
            if(productCategory.length > 0 ){
                res.status(200).json({
                    orgM,
                    productCategory 
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