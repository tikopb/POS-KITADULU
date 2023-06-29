const { productcategory } = require('../models');
const ImportCoreProcess = require("./BulkImport/ImportCoreProcess");
let Pagination = require('./pagination/pagination');

class ProductCategoriesService {
    constructor(req) {
        this.credential = req.user;
        this.body = req.body;
        this.params = req.params;
        this.userCrd = req.user;
    }

    /**
     * get all data base on user.client_id credential
     * 
     */
    GetAll = async () => {
        const pagination = new Pagination(); //class decalare
        const metadata = await pagination.PaginationGet(req,productcategory.tableName);
        const whereMap = await pagination.GetWhereMapOrm(req,productcategory.tableName, res); 
        
        productcategory.findAll({
            where: whereMap,
            limit: metadata.limit,
            offset: metadata.offset,
            order: [['name']]
        }).then(function (data) { 
            if(data.length > 0 ){
                res.status(200).json({
                    status: 'succsess',
                    msg: 'data get succsess',
                    metadata: metadata,
                    data
                })
            }else{
                res.status(404).json({
                    status: 'succsess',
                    msg: "product category not exist",
                    metadata: metadata,
                    data
                })
            }
        })
    }

    /**
     * Getting one data with Primary key of table class
     * @param {*} id 
     * @returns 
     */
    getOne = async(id) => {
        let data = await productcategory.findByPk(id);
        let returnObj = ({
            status: 'succsess',
            msg: 'get data succsess',
            urlEncoding: 200,
            data: data
        })           
        return returnObj;
    }

    /**
     * Create data for product category service
     * @param {*} req 
     * @param {*} res 
     */
    Store =  async(name, description) => {
        //const {name, description} = this.body
        const UserCrd = this.credential
        try {
            let data = await productcategory.create({
                name: name,
                description: description,
                isactive: true,
                org_id: UserCrd.org_id,
                client_id: UserCrd.client_id
            })
            return({
                status: 'succsess',
                msg: 'get data succsess',
                urlEncoding: 200,
                data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                return({
                    status: 'error',
                    msg: `Product Category with value ${name} already exists`,
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
    }
    
    /**
     * updating data of product category with client data as variabel
     * @param {*} id 
     * @param {*} name 
     * @param {*} description 
     * @param {*} isactive 
     * @returns 
     */
    Update = async(id, name, description, isactive) => {
        let data = await productcategory.findByPk(id);
        let returnObj = [];
        try {
            if(data == null){
                throw new Error('data no found');
            };
            data.set({
                name: name,
                description: description,
                isactive: isactive
            })
            await data.save();
            
            returnObj = ({
                status: 'succsess',
                msg: `data Updated`,
                urlEncoding: 200,
                data: data
            })
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                returnObj = ({
                    status: 'error',
                    msg: `Product Category with value ${name} already exists`,
                    urlEncoding: 403,
                    data: []
                })
            } else {
                returnObj = ({
                    status: 'error',
                    msg: `Something went wrong ${err.message}`,
                    urlEncoding: 500,
                    data: []
                })
            }
        }
        return returnObj;
    }

    Delete = async(ProductCategories_id) => {
        let data = await productcategory.findByPk(ProductCategories_id)
        let returnObj = [];
        try {
            if(data == null){
                throw new Error('data no found');
            };
            await data.destroy()
            returnObj = ({
                status: 'succsess',
                msg: `data deleted`,
                urlEncoding: 200,
                data: []
            })
        } catch(err){
            returnObj = ({
                status: 'succsess',
                msg: err.message,
                urlEncoding: 200,
                data: []
            })
        }
        return returnObj;
    }

    /**
     * do it bulk uploud with parsing file first on ImportCoreProcess
     * after parsing done system will execute create file
     * @param {*} filename 
     * @returns 
     */
    Bulk = async (filename, mimetype) => {
        const coreImport = new ImportCoreProcess();
        let processImport = await coreImport.ParsingExcelToJson(filename, mimetype);
        let counting = 0;
        let returnObj = [];
        let dataCreated = [];
        try {
            if(processImport.status === "erorr"){
                return ({
                    status: 'erorr',
                    msg: processImport.msg,
                    urlEncoding: 500,
                    data: dataCreated
                })
            }
            for (const item of processImport.data.upload) {
                // Access the properties of each item in the loop
                const name = item.name;
                const description = item.description;

                //validate if data existed then continue;
                const data = await productcategory.findOne({ where: { name: name} });
                if(data!==null ){
                    continue;
                }

                let created = await this.Store(name,description);
                counting++;
                dataCreated.push(created.data)
            }
            returnObj = ({
                status: 'sucsess',
                msg: `${counting} data succsess imported`,
                urlEncoding: 200,
                data: dataCreated
            })
        } catch (err) {
            return ({
                status: 'erorr',
                msg: `Something went wrong ${err.message}`,
                urlEncoding: 500,
                data: dataCreated
            })
        }
        return returnObj;
    }

    DownloadTemplate = async() => {
        const coreImport = new ImportCoreProcess();
        let filePath = await coreImport.GetTemplateFile(productcategory.tableName);
        return filePath;
    }
}

module.exports = ProductCategoriesService;
