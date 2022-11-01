let { Org, Client } = require('../models');
const { Op, or } = require("sequelize");

module.exports = {
    CreateClientAndOrganization: async (req,res) => {
        const {nameClient, description, adress} = req.body
        Client.findAll({
            where: {
                name: nameClient 
            }
        }).then(function(ClientData){
            if(ClientData.length > 0){
                res.status(500).json({
                    msg: 'client already exist'
                })
            }
            Client.create({
                name: nameClient,
                description: description,
                isactive: true
            }).then(function(ClientCreated){
                Org.create({
                    name: ClientCreated.name,
                    description: ClientCreated.description,
                    isactive: true,
                    adress: adress,
                    client_id: ClientCreated.Client_id
                }).then(function(orgCreated){
                    res.status(200).json({
                        ClientCreated,
                        orgCreated,
                        msg: "data sucsessfull generated"
                    })
                })
            })
        })
    },
    UpdateClient: async (req,res) => {
        const {clientid, name, description, isactive} = req.body
        let ClientData = Client.findByPk(clientid)
        try {
            ClientData.set({
                name: name,
                description: description,
                isactive: isactive
            })
            await ClientData.save()
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