const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const fs = require("fs-extra");
const path = require('path');


class ImportCoreProcess{

    /**
     * execute excel file and parsing into object return into object parsing
     * system just execute file on upload sheet
     * @returns 
     */
    ParsingExcelToJson = async(filename, mimetype) => {
        //validation file must be on XLSX FORMAT!
        var filePath = "./services/BulkImport/upload/" + filename;            
        if(mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
            fs.remove(filePath) //deletin file after failed
            return ({
                status: 'erorr',
                msg: 'FILE NOT IN XLSX FORMAT!',
                data: []
            })
        }
        try {
            //filePath will filied with object excel parsing from user
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

    GetTemplateFile = async (tableName) => {
        const filePath = path.join('./services/BulkImport/download/', tableName+'.xlsx');
        return filePath;
    }
}

module.exports = ImportCoreProcess;