const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const fs = require("fs-extra");

var uploud = multer({dest: "./services/BulkImport/uplouds"});

class ImportCoreProcess{
    ParsingExcelToJson = async(req,res) => {
        try {
            if(req.file.filename == null || req.file.filename == 'undefined'){
                res.status(400).json({
                    status: 'import failed',
                    msg: 'File Not Exist',
                    data: []
                })
            }else {
                var filePath = "uplouds/" + req.file.filename;
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
                res.status(200).json({
                    status: 'succsess',
                    msg: 'data get succsess',
                    excelData
                });
            }
        } catch (err) {
            res.status(500).json({
                status: 'error',
                msg: `Something went wrong ${err.message}`,
                data: []
            })
        }  
    }
}

module.exports = ImportCoreProcess;