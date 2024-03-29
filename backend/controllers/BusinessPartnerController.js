let {business_partner, Client, Org} = require('../models');
const { Op } = require("sequelize");

let BusinessPartnerService = require("../services/BusinessPartner-Service");

module.exports = {
    /**
    * Getting all data base on client id is active return data to list of uom. this function will have 10 limit as default 
     * @param {*} req 
     * @param {*} res 
     */
    Index: async(req,res) => {
        const service = new BusinessPartnerService(req);
        try {
            const todo = await service.GetAll();
            if(todo.data.length > 0){
                res.status(200).json({
                    status: `success`,
                    msg: `get succsess`,
                    metadata: todo.metadata,
                    data: todo.data
                })
            }
            else{
                res.status(200).json({
                    status: 'succsess',
                    msg: "business partner not exist",
                    metadata: [],
                    data: []
                })
            }
        } catch (err) {
            res.status(500).json({
                status: `erorr`,
                msg: `${err.toString()}`,
                metadata: [],
                data: []
            })
        }
    },
    /**
     * Getting data uom with ID
     * @param {business_partner_id} req  
     */
    Show: async(req,res) => {
        const business_partner_id = req.params.id
        const service = new BusinessPartnerService(req);
        const todo = await service.GetOne(business_partner_id);

        return res.status(todo.urlEncoding).json({
            status: todo.status,
            msg: todo.msg,
            data: todo.data
        });  
    },
    /**¡
     * Creating data of uom
     * @param {client_id, name, description, org_id, client_id} client_id 
     * @param {*} res 
     */
    Create: async(req,res) => {
        const service = new BusinessPartnerService(req);
        const todo = await service.Store();

        return res.status(todo.urlEncoding).json({
            status: todo.status,
            msg: todo.msg,
            data: todo.data
        });  
    },
    /**
     * updating data of uom data with uom_id as parameter mandatory
     * @param {business_partner_id, name, description, isactive} req 
     * @param {msg, data} res 
     */
    Update: async(req,res) => {
        const business_partner_id = req.params.id;
        const service = new BusinessPartnerService(req);
        const todo = await service.Update(business_partner_id);

        return res.status(todo.urlEncoding).json({
            status: todo.status,
            msg: todo.msg,
            data: todo.data
        });  
    },
    /**
     * Deleting data base on uom_id
     * @param {uom_id} req 
     * @param {*} res 
     */
    Delete: async(req,res) => {
        const business_partner_id = req.params.id;
        const service = new BusinessPartnerService(req);
        const todo = await service.Delete(business_partner_id);

        return res.status(todo.urlEncoding).json({
            status: todo.status,
            msg: todo.msg,
            data: todo.data
        });  
    }
}