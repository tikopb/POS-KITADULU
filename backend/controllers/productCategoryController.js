let { productcategory, Client, org } = require('../models');
let Pagination = require('./pagination/pagination');
const { Op } = require("sequelize");
const path = require('path');

let ProductCategoriesService = require("../services/ProductCategory-Service");

module.exports = {
    /**
     * Getting all data with client_id as data variabel
     * order by name as default
     * @param {*} req  
     * @param {*} res 
     */
    Index: async(req,res) => {
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
                    data
                })
            }
        })
    }, 
    /**
     * Get data of product category with product categories_id as parameter
     * @param {*} req 
     * @param {*} res 
     */
    Show: async (req,res) => {
        const ProductCategories_id = req.params.id;
        const service = new ProductCategoriesService(req);
        const todo = await service.getOne(ProductCategories_id);

        return res.status(todo.urlEncoding).json({
            status: todo.status,
            msg: todo.msg,
            data: todo.data
        });  
    },
    /**
     * calling services for process create
     * @param {*} req 
     * @param {*} res 
     */
    Create: async(req,res) => {
        const service = new ProductCategoriesService(req);
        const {name, description} = req.body;
        const todo = await service.Store(name, description);

        return res.status(todo.urlEncoding).json({
            status: todo.status,
            msg: todo.msg,
            data: todo.data
        });          
    },
    /**
     * updating data of product category with client data as variabel
     * @param {*} req 
     * @param {*} res 
     */
    Update: async(req,res) => {
        const ProductCategories_id = req.params.id;
        const { name, description, isactive} = req.body
        const service = new ProductCategoriesService(req);
        const todo = await service.Update(ProductCategories_id, name, description, isactive);

        return res.status(todo.urlEncoding).json({
            status: todo.status,
            msg: todo.msg,
            data: todo.data
        });      
    },
    /**
     * deleting data of product category
     * @param {*} req 
     * @param {*} res 
     */
    Delete: async(req,res) => {
        const ProductCategories_id = req.params.id;
        let data = await productcategory.findByPk(ProductCategories_id)
        try {
            if(data == null){
                throw new Error('data no found');
            };
            await data.destroy()
            res.status(200).json({
                status: 'succsess',
                msg: 'data deleted'
            })
        } catch(err){
            res.status(401).json({
                status: 'erorr',
                msg: err.message
            })
        }
    },

    /**
     * Saving 
     * @param {*} req 
     * @param {*} res 
     */
    BulkUploud: async(req,res) => {
        if(req.file === null || req.file === undefined){
            res.status(400).json({
                status: 'erorr',
                msg: "File NOT FOUND"
            })
        }
        const service = new ProductCategoriesService(req);
        const todo = await service.Bulk(req.file.filename, req.file.mimetype);

        res.status(todo.urlEncoding).json({
            status: todo.status,
            msg: todo.msg,
            data: todo.data
        });
    },


    DownloadTemplate: async (req, res) => {
        // filePath
        const filePath = path.join(
          './services/BulkImport/download/',
          productcategory.tableName + 'template.xlsx'
        );
      
        const isAvailable = fs.existsSync(filePath);
        if(!isAvailable){
            res.status(500).json({
                status: 'error',
                msg: `Something went wrong: FILE NOT FOUND!`,
            });
        }

        res.download(filePath, (err) => {})
    } 
}