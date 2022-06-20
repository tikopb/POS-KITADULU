let { org, client } = require('../models');
const { Op } = require("sequelize");

module.exports = {
    CreateClientAndOrganization: async (req,res) => {
        const {name, description, adress} = req.body
        client.findAll({
            where: {
                name: name
            }
        })
        .then(function (clientExist) {
            if(clientExist.length > 0 ){
                console.log('client exist')
                res.status(500).json({
                    msg: 'Client Exist'
                })
            }
            else{
                try {
                    let client = await client.create({
                        name: name,
                        description: description,
                        isactive: true
                    }).then( clientData => {
                        let organization = await org.create({
                            name: name,
                            description: description,
                            client_id: clientData.client_id,
                            adress: adress
                        })
                    })
                    res.status(200).json({
                        msg: 'client and registered'
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
        let valueClient = client.findByPk(clientid);
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