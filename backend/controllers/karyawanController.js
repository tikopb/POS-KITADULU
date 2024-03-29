let { karyawan } = require('../models');
let Pagination = require('./pagination/pagination'); 
const { Op } = require("sequelize");

module.exports = {
    /**
     * getting all data of karyawan with client_id as paramter
     * @param {*} req 
     * @param {*} res 
     */
    Index: async(req,res) => {
        const pagination = new Pagination(); //class decalarkaye
        const metadata = await pagination.PaginationGet(req,karyawan.tableName);
        const whereMap = await pagination.GetWhereMapOrm(req); 
        try {
           let data = await karyawan.findAll({
                where:whereMap,
                limit: metadata.limit,
                offset: metadata.offset
            })
            res.status(200).json({
                status: 'succsess',
                msg: 'Get Succsess',
                data
            })
        } catch (err) {
            res.status(500).json({
                status: 'erorr',
                err: `${err.toString()}`,
            })
        }
    },
    /**
    * Getting data of karyawan with karyawan_id as parameter
    * @param {*} req 
    * @param {*} res 
    */
    Show: async(req,res) => {
        const karyawan_id = req.params.id;
        let data = await karyawan.findByPk(karyawan_id)
        res.status(200).json({
            status: 'succsess',
            msg: 'get succsess',
            data
        })
    },
    /**
     * Generate data of org with client_id as data variabel
     * @param {*} req 
     * @param {*} res 
     */
    Create: async(req, res) => {
        const param = req.body;
        const UserCrd = req.user
        try {
            console.log(param)
            let data = await karyawan.create({
                name: param.name,
                nik: param.nik,
                description: param.description,
                isactive: true,
                client_id: UserCrd.Client_id,
                org_id: UserCrd.Org_id
            })
            res.status(200).json({
                status: 'succsess',
                msg: 'karyawan registered',
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ status: 'error', msg: `karyawan with nik ${param.nik}  already exists`});
            } else {
                res.status(500)
                res.send({ status: 'error', msg: `Something went wrong: ${err.message}`});
            }
        }
    },
    /**
     * Updating data of org with karyawan_id as parameter.
     * @param {*} req 
     * @param {*} res 
     */
    Update: async(req,res) => {
        const karyawan_id = req.params.id;
        let param = req.body
        let data = await karyawan.findByPk(karyawan_id)
        try {
            if(data == null){
                throw new Error('data no found');
            }
            data.set({
                name: param.name,
                nik: param.nik,
                description: param.description,
                isactive: param.isactive,
                org_id: param.Org_id
            })
            await data.save()
            res.status(200).json({
                status: 'succsess',
                msg: 'karyawan updated',
                data    
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ status: 'error', msg: `karyawan with name ${param.name} already exists`});
            } else {
                res.status(500)
                res.send({ status: 'error', msg: `Something went wrong ${err.message}`});
            }
        }
    },
    /**
     * Deleting data of karyawan but this function can't use when data karyawan_id already constraint to other table
     * @param {*} req 
     * @param {*} res 
     */
    Delete: async(req,res) => {
        const karyawan_id = req.params.id;
        let data = await karyawan.findByPk (karyawan_id);
        try {
            if(data == null){
                throw new Error('data no found');
            }
            await data.destroy()
            res.status(200).json({
                status: 'succsess',
                msg:'data deleted'
            })
        } catch (err) {
            res.status(401).json({
                status: 'erorr',
                msg: `Something went wrong ${err.message}`
            })
        }
    }
}