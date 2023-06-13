const { productcategory } = require('../models');
const excelToJson = require("convert-excel-to-json");
const fs = require("fs-extra");

class ProductCategoriesService {
    constructor(req) {
        this.credential = req.app.locals.credential;
        this.body = req.body;
        this.params = req.params;
        this.userCrd = req.user;
    }

    Bulk = async () => {
        try {
            if (filename === null || filename === 'undefined') {
                return ({
                    status: 'erorr',
                    msg: 'file not exist',
                    data: []
                })
            }
            console.log(`file name = ${req.file.filename}`)
            var filePath = "./services/BulkImport/uplouds/" + req.file.filename;
            console.log(filePath)
            
            const excelData = excelToJson({
                sourceFile: filePath,
                header :{
                    rows: 1,
                },
                sheets: ['uploud'],
                columnToKey: {
                    "*": "{{columnHeader}}",
                },
            });

            fs.remove(filePath)
            return ({
                status: 'succsess',
                msg: 'data get succsess',
                excelData
            });
        } catch (err) {
            return ({
                status: 'erorr',
                msg: `Something went wrong ${err.message}`,
                data: []
            })
        }
        
    }
}

module.exports = ProductCategoriesService;
