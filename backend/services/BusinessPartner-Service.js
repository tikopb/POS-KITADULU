let {business_partner, Client, Org} = require('../models');
let Pagination = require('./pagination/pagination');
const { Op } = require("sequelize");

class BusinessPartnerService {
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
        const metadata = await pagination.PaginationGet(business_partner.tableName);
        const whereMap = await pagination.GetWhereMapOrm(business_partner.tableName); 
        console.log(`whereMap == ${whereMap}`)

        const data = await business_partner.findAll({
            where: whereMap,
            limit: metadata.limit,
            offset: metadata.offset,
            order: [['name']]
        });
        console.log(`data == ${data}`)
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
        let data = await business_partner.findByPk(id);
        let returnObj = ({
            status: 'succsess',
            msg: 'get data succsess',
            urlEncoding: 200,
            data: data
        })           
        return returnObj;
    }

    /**
     * creating data of business partner
     * @returns 
     */
    Store =  async() => {
        const {name, description} = this.req.body
        let {value} = req.body;
        let returnObj=[]
        if(this.req.value === null || this.req.value === ""){
            value = await GenerateValueGenerator(name, this.user.Org_id)
        }else{
            value = this.req.value;
        }
        try {
            let data = await business_partner.create({
                value: value,
                client_id: this.user.Client_id,
                org_id: this.user.Org_id,
                name: name,
                description: description,
                isactive: true
            })
            returnObj = ({
                status: 'succsess',
                msg: 'Business Partner generated',
                urlEncoding: 200,
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                return({
                    status: 'error',
                    msg: `Business Partner with value ${name} already exists`,
                    urlEncoding: 403,
                    data: []
                })
            } else {
                return({
                    status: 'error',
                    msg: `Something went wrong: ${err.message}`,
                    urlEncoding: 500,
                    data: []
                })
            }
        }
        return returnObj;
    }

    /**
     * updating data of business partner with business_partner_id as parameter
     * @param {*} business_partner_id 
     */
    Update = async(business_partner_id) => {
        const {value, name, description, isactive} = req.body;
        let data = await business_partner.findByPk(business_partner_id)
        try {
            if(data == null){
                throw new Error('data no found');
            }
            let valueP = value;
            if(valueP == null) {
                valueP= data.value // <- if value null than get from data table
            }
            data.set({
                value: valueP,
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
                    msg: `Business Partner with value ${value} already exists`,
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
     * @param {*} business_partner_id 
     * @returns 
     */
    Delete = async(business_partner_id)=> {
        let data = await business_partner.findByPk(business_partner_id)
        let name = data.name
        try {
            await data.destroy()
            this.returnObj({
                status: `success`,
                msg:`data ${name}  success deleted`,
                urlEncoding: 403,
                data: []
            })
        } catch (err) {
            res.status(401).json({
                status: `erorr`,
                msg: err.message
            })
            this.returnObj({
                status: 'erorr',
                msg: `Something went wrong: ${err.message}`,
                urlEncoding: 403,
                data: []
            })
        }
        return this.returnObj;
    }

    // == oustide CRUD function

    /**
     * Generating value of business_partner.value with getting the last count of combine name and org.
     * @param {*} name 
     * @param {*} org_id 
     * @returns 
     */
    GenerateValueGenerator = async (name, org_id) => {
        let value = GetAcronymn(name)
        let countBpList = await business_partner.findAll({
            where: {
                value: {
                    [Op.like]: value + '%'
                },
                org_id: org_id
            }
        })
        if(countBpList.length > 0 ){
            let lastNumber = countBpList.length+1
            value = value + '-' + lastNumber
        }
        return value.toUpperCase();
    }

    /**
     * generating acrynoym on str variabel
     * @param {*} str
     */
    GetAcronymn( str ) {
        return str.split( /\b(?=[a-z])/ig ) // split on word boundaries
        .map( token => token[0] )         // get first letter of each token
        .join( '' ).toUpperCase()         // convert to uppercase string
        ;
    }
}




module.exports = BusinessPartnerService;