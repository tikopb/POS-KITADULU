let {Uom} = require('../models');
let UomService = require("../services/uom-service");

module.exports = {
    /**
     * Getting all data base on client id is active return data to list of uom
     * @param {*} req 
     * @param {*} res 
     */
    Index: async(req,res) => {
        const service = new UomService(req);
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
                    msg: "uom not exist",
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
     * @param {uom_id} req  
     */
    Show: async(req,res) => {
        const uom_id = req.params.id;
        const service = new UomService(req);
        const todo = await service.GetOne(uom_id);

        return res.status(todo.urlEncoding).json({
            status: todo.status,
            msg: todo.msg,
            data: todo.data
        });  
    },
    /**
     * Creating data of uom
     * @param {client_id, name, description, org_id, client_id} client_id 
     * @param {*} res 
     */
    Create: async(req,res) => {
        const {name, description} = req.body
        const service = new UomService(req);
        const todo = await service.Store(name, description);

        return res.status(todo.urlEncoding).json({
            status: todo.status,
            msg: todo.msg,
            data: todo.data
        });  
    },
    /**
     * updating data of uom data with uom_id as parameter mandatory
     * @param {uom_id, name, description, isactive} req 
     * @param {msg, data} res 
     */
    Update: async(req,res) => {
        const uom_id = req.params.id;
        const service = new UomService(req);
        const todo = await service.Update(uom_id);

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
        const uom_id = req.params.id;
        const service = new UomService(req);
        const todo = await service.Delete(uom_id);

        return res.status(todo.urlEncoding).json({
            status: todo.status,
            msg: todo.msg,
            data: todo.data
        });  
    }
}