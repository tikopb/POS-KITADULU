const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const fs = require("fs-extra");

var uploud = multer({dest: "./services/BulkImport/uplouds"});

class ImportCoreProcess{

    /**
     * execute excel file and parsing into object return into object parsing
     * system just execute file on uplouds sheet
     * @returns 
     */
    ParsingExcelToJson = async(filename) => {
        try {
                    console.log(`file name ${filename}`)

            //system will return failed when file is not found
            if (filename === null || filename === 'undefined') {
                return ({
                    status: 'erorr',
                    msg: 'file not exist',
                    data: []
                })
            }
            //filePath will filied with obejct excel parsing from user
            var filePath = "./services/BulkImport/upload/" + filename;            
            const excelData = await excelToJson({
                sourceFile: filePath,
                header :{
                    rows: 1,
                },
                sheets: ['upload'],
                columnToKey: {
                    "*": "{{columnHeader}}",
                },
            });
            console.log(filePath)
            fs.remove(filePath) //deleteing file after execute
            return ({
                status: 'sucsess',
                msg: 'sucsess',
                data: excelData
            })
        } catch (err) {
            return ({
                status: 'erorr',
                msg: `something wrong ${err.message}`,
                data: []
            })
            
        }
    }
}

module.exports = ImportCoreProcess;