let { org, client } = require('../models');
const { Op } = require("sequelize");

module.exports = {
    CreateClientAndOrganization: async (req,res) => {
        const {nameClient, description, adress} = req.body
        client.findAll({
            where: {
                name: nameClient 
            }
        }).then(function (clientExist) {
            if(clientExist.length > 0 ){
                res.status(500).json({
                    msg: 'Client Exist'
                })
            }
            else{
                try {
                    let client = client.create({
                        name: nameClient,
                        description: description,
                        isactive: true
                    }).then( clientData => {
                        let organization = org.create({
                            name: nameClient,
                            description: description,
                            client_id: clientData.client_id,
                            adress: adress
                        }).then( orgData => {
                            res.status(200).json({
                                orgData,
                                msg: 'Data Created Successfully'
                            })
                        })
                    })
                } catch (err) {
                    res.status(401).json({
                        msg: err.message
                    })
                }
            }
        })
    },
    UpdateClient: async (req,res) => {
        const {clientid, name, description, isactive} = req.body
        let valueClient = client.findByPk(clientid)
        try {
            valueClient.set({
                name: name,
                description: description,
                isactive: isactive
            })
            await valueClient.save()
            res.status(200).json({
                msg: 'client updated'
            })
        } catch (err) {
            res.status(401).json({
                msg: err.message
            })
        }
    }
}