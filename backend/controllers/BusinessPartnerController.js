let {business_partner, Client, Org} = require('../models');
let Pagination = require('./pagination/pagination');
const { Op } = require("sequelize");

/**
 * Generating value of business_partner.value with getting the last count of combine name and org.
 * @param {*} name 
 * @param {*} org_id 
 * @returns 
 */
async function GenerateValueGenerator(name, org_id){
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
function GetAcronymn( str ) {
    return str.split( /\b(?=[a-z])/ig ) // split on word boundaries
      .map( token => token[0] )         // get first letter of each token
      .join( '' ).toUpperCase()         // convert to uppercase string
    ;
}

module.exports = {
    /**
     * Getting all data base on client id is active return data to list of uom. this function will have 10 limit as default 
     * @param {*} req.user
     */
    Index: async(req,res) => {
        const pagination = new Pagination(); //class decalare
        const metadata = await pagination.PaginationGet(req,business_partner.tableName);
        const whereMap = await pagination.GetWhereMapOrm(req); 
       
        try {
            business_partner.findAll({
                where:whereMap,
                limit: metadata.limit,
                offset: metadata.offset
            }).then(function(data){
                if(data.length > 0){
                    res.status(200).json({
                        status: `success`,
                        msg: `get succsess`,
                        metadata:metadata,
                        data
                    })
                }
                else{
                    res.status(200).json({
                        status: 'succsess',
                        msg: "business partner not exist",
                        data
                    })
                }
            })
        } catch (err) {
            res.status(500).json({
                status: `erorr`,
                msg: `${err.toString()}`
            })
        }
    },
    /**
     * Getting data uom with ID
     * @param {business_partner_id} req  
     */
    Show: async(req,res) => {
        const business_partner_id = req.params.id
        let data = await business_partner.findByPk(business_partner_id)
        res.status(200).json({
            status: `success`,
            msg: `get succsess`,
            data,
        })
    },
    /**¡
     * Creating data of uom
     * @param {client_id, name, description, org_id, client_id} client_id 
     * @param {*} res 
     */
    Create: async(req,res) => {
        const {value, name, description} = req.body
        const UserCrd = req.user
        let valueP = value
        if(value == null || value === ""){
            valueP = await GenerateValueGenerator(name, UserCrd.Org_id)
            console.log("value = " + valueP)
        }
        try {
            let data = await business_partner.create({
                value: valueP,
                client_id: UserCrd.Client_id,
                org_id: UserCrd.Org_id,
                name: name,
                description: description,
                isactive: true
            })
            res.status(200).json({
                status: `success`,
                msg: 'Business Partner generated',
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ 
                    status: 'error', 
                    msg: `Business Partner with value ${valueP} already exists`
                });
            } else {
                res.status(500)
                res.send({ 
                    status: 'error', 
                    msg: "Something went wrong"
                });
            }
        }
    },
    /**
     * updating data of uom data with uom_id as parameter mandatory
     * @param {business_partner_id, name, description, isactive} req 
     * @param {msg, data} res 
     */
    Update: async(req,res) => {
        const business_partner_id = req.params.id;
        const {value, name, description, isactive} = req.body
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
            await data.save()
            res.status(200).json({
                status: `success`,
                msg: 'data updated',
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ status: 'error', msg: `Business Partner with value ${value} already exists`});
            } else {
                res.status(500)
                res.send({ status: 'error', msg: `Something went wrong: ${err.message}`});
            }
        }
    },
    /**
     * Deleting data base on uom_id
     * @param {uom_id} req 
     * @param {*} res 
     */
    Delete: async(req,res) => {
        const business_partner_id = req.params.id;
        let data = await business_partner.findByPk(business_partner_id)
        let name = data.name
        try {
            await data.destroy()
            res.status(200).json({
                status: `success`,
                msg:`data ${name}  success deleted`
            })
        } catch (err) {
            res.status(401).json({
                status: `erorr`,
                msg: err.message
            })
        }
    }
}