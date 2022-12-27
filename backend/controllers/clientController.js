let { Org, Client } = require('../models');
const { Op, or } = require("sequelize");

module.exports = {
    /**
     * Getting data by id with client_id as parameter
     * @param {client_id} req 
     * @param {*} res 
     */
    Get: async(req,res) => {
        const bodyV = req.body
        let data = await Client.findByPk(bodyV.client_id)
        res.json(200).json({
            status: 'succsess',
            msg: 'data get succsess',
            data
        })
    },
    /**
     * Getting all data of client without parameter
     * @param {*} req 
     * @param {*} res 
     */
    GetAll: async(req,res) => {
        const bodyV = req.body
        let data = await Client.findAll()
        res.json(200).json({
            status: 'succsess',
            msg: 'data get succsess',
            data
        })
    },
    /**
     * creating data of client and automacilly making data organization as defaults
     * @param {*} req 
     * @param {*} res 
     */
    Create: async (req,res) => {
        let bodyV = req.body
        Client.findAll({
            where: {
                name: bodyV.name 
            }
        }).then(function(ClientData){
            if(ClientData.length > 0){
                res.status(500).json({
                    msg: 'client already exist'
                })
            }
            Client.create({
                name: bodyV.name ,
                description: bodyV.description,
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
    /**
     * Updating data of client with data of 
     * @param {*} req 
     * @param {*} res 
     */
    Update: async (req,res) => {
        let bodyV = req.body
        let ClientData = Client.findByPk(clientid)
        try {
            ClientData.set({
                name: bodyV.name,
                description: bodyV.description,
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