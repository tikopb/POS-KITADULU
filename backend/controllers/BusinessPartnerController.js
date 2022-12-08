let {Businesspartner, Client, Org} = require('../models') 
const { Op } = require("sequelize");

async function GenerateValueGenerator(name, org_id){
    let value = GetAcronymn(name)
    let countBpList = await Businesspartner.findAll({
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

function GetAcronymn( str ) {
    return str.split( /\b(?=[a-z])/ig ) // split on word boundaries
      .map( token => token[0] )         // get first letter of each token
      .join( '' ).toUpperCase()         // convert to lowercase string
    ;
}

module.exports = {
    /**
     * Getting data uom with ID
     * @param {businesspartner_id} req  
     */
    Get: async(req,res) => {
        let data = await Businesspartner.findByPk(req.body.businesspartner_id)
        res.status(200).json({
            data,
            status: `success`
        })
    },
    /**
     * Getting all data base on client id is active return data to list of uom
     * @param {client_id} req 
     */
    GetAll: async(req,res) => {
        const {client_id} = req.body
        try {
            Businesspartner.findAll({
                where:{
                    client_id: client_id,
                    //isactive: true
                }
            }).then(function(data){
                res.status(200).json({
                    data,
                    status: `success`
                })
            })
        } catch (err) {
            res.status(500).json({
                err: `${err.toString()}`,
                status: `erorr`
            })
        }
    },
    /**
     * Creating data of uom
     * @param {client_id, name, description, org_id, client_id} client_id 
     * @param {*} res 
     */
    Create: async(req,res) => {
        const {client_id, value, name, description, org_id} = req.body
        let valueP = value
        if(value == null || value === ""){
            valueP = await GenerateValueGenerator(name, org_id)
            console.log("value = " + valueP)
        }
        try {
            let data = await Businesspartner.create({
                value: valueP,
                client_id: client_id,
                org_id: org_id,
                name: name,
                description: description,
                isactive: true
            })
            res.status(200).json({
                data,
                msg: 'Business Partner generated',
                status: `success`
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
     * @param {Businesspartner_id, name, description, isactive} req 
     * @param {msg, data} res 
     */
    Update: async(req,res) => {
        const {Businesspartner_id, value, name, description, isactive} = req.body
        let data = await Businesspartner.findByPk(Businesspartner_id)
        console.log('uom' + data)
        data.set({
            value: value,
            name: name,
            description: description,
            isactive: isactive
        })
        try {
            await data.save()
            res.status(200).json({
                data,
                msg: 'data updated',
                status: `success`
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(403)
                res.send({ status: 'error', msg: `Business Partner with value ${value} already exists`});
            } else {
                res.status(500)
                res.send({ status: 'error', msg: "Something went wrong"});
            }
        }
    },
    /**
     * Deleting data base on uom_id
     * @param {uom_id} req 
     * @param {*} res 
     */
    Delete: async(req,res) => {
        const{Businesspartner_id} = req.body
        let data = await Businesspartner.findByPk(Businesspartner_id)
        let name = data.name
        try {
            await data.destroy()
            res.status(200).json({
                msg:`data ${name}  success deleted`,
                status: `success`
            })
        } catch (err) {
            res.status(401).json({
                msg: err.message,
                status: `erorr`
            })
        }
    }
}