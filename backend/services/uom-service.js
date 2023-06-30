let {uom} = require('../models') 
let Pagination = require('./pagination/pagination');
const {Op} = require("sequelize")

class UomService {
    constructor (req){
        this.body = req.body;
        this.params = req.params;
        this.query = req.query;
        this.user = req.user;
        this.returnObj = []
    }

     /**
     * getting get all data with parameter of client id on constructor
     * @returns data
     */
    GetAll = async() => {
        const pagination = new Pagination(this.user,this.query);
        const metadata = await pagination.PaginationGet(uom.tableName);
        const whereMap = await pagination.GetWhereMapOrm(uom.tableName); 
        console.log(`whereMap == ${whereMap}`)

        const data = await uom.findAll({
            where: whereMap,
            limit: metadata.limit,
            offset: metadata.offset,
            order: [['name']]
        });

        return ({
            metadata,
            data
        });
    }

    /**
     * Getting one data with Primary key of table class
     * @param {*} id 
     * @returns 
     */
    GetOne = async(id) => {
        let data = await uom.findByPk(id);
        let returnObj = ({
            status: 'succsess',
            msg: 'get data succsess',
            urlEncoding: 200,
            data: data
        })           
        return returnObj;
    }

    /**
     * Store data of UOM
     * @param {*} name 
     * @param {*} description 
     * @returns 
     */
    Store = async (name, description) => {
        try {
            let data = await uom.create({
                client_id: this.user.client_id,
                org_id: this.user.org_id,
                name: name,
                description: description,
                isactive: true
            })
            this.returnObj = ({
                status: 'sucsess', 
                msg: `Create data succsess`,
                urlEncoding: 200,
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                this.returnObj = ({
                    status: 'error',
                    msg: `Uom with value ${value}, name ${name} already exists`,
                    urlEncoding: 403,
                    data: []
                })

            } else {
                this.returnObj = ({
                    status: 'error',
                    msg: `Something went wrong: ${err.message}`,
                    urlEncoding: 500,
                    data: []
                })
            }
        }
        return this.returnObj;
    }

    /**
     * Updateing data of UOM with id as parameter on primary key of table
     * @param {*} id 
     * @returns 
     */
    Update = async(id) => {
        const {name, description, isactive} = this.body
        let data = await uom.findByPk(id)
        try {
            if(data == null){
                throw new Error('data no found');
            }
            data.set({
                name: name,
                description: description,
                isactive: isactive
            })
            await data.save();
            this.returnObj = ({
                status: 'succsess',
                msg: 'Data Updated',
                urlEncoding: 200,
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                this.returnObj = ({
                    status: 'erorr',
                    msg: `Uom with value ${name} already exists`,
                    urlEncoding: 403,
                    data: []
                })
            } else {
                this.returnObj = ({
                    status: 'erorr',
                    msg: `Something went wrong: ${err.message}`,
                    urlEncoding: 403,
                    data: []
                })
            }
        }
        return this.returnObj;
    }

    /**
     * Deleting data base on pk off table
     * @param {*} id 
     * @returns 
     */
    Delete = async(id)=> {
        let data = await uom.findByPk(id)
        try {
            if(data == null){
                throw new Error('data no found');
            }
            let name = data.name
            await data.destroy()
            this.returnObj = ({
                status: `success`,
                msg:`data ${name}  success deleted`,
                urlEncoding: 403,
                data: []
            })
        } catch (err) {
            this.returnObj = ({
                status: 'erorr',
                msg: `Something went wrong: ${err.message}`,
                urlEncoding: 500,
                data: []
            })
        }
        return this.returnObj;
    }
}

module.exports = UomService