const sequelize = require('../../config/db');
const { QueryTypes } = require("sequelize");

class Pagination{
  /**
   * getting pagination data if where just client id than get with materilized view
   * @param {*} offset 
   * @param {*} limit 
   * @param {*} tableName 
   */
  PaginationGet = async(req,tableName) => {
    const WhereMap = this.GetWhereMap;
    let total_data = 0;
    let limit = req.query.page_size || 20
    const page = req.query.page || 1;
    let offset = limit * (page - 1);
    
    if(WhereMap.size > 1){
      total_data = await this.CountDataWithWhereParameter(tableName, req.user.client_id);
      offset = 0;
    }else{
      total_data = await this.CountDataWithMaterialized(tableName, req.user.client_id);
      offset = 0;
    }
    const total_page = Math.ceil(total_data / limit);

    const metadata = {
      page,
      limit,
      total_page,
      offset
    }

    return metadata;
  }

  /**
   * function making map for where decalare on function
   * @returns whereParameter
   */
  GetWhereMap = async (req) => {
    const whereParameter = new Map();
      for (const key in req.query) {
        if (Object.hasOwnProperty.call(req.query, key)) {
          whereParameter.set(key, req.query[key]);
        }
      }        
    whereParameter.delete('page_size')
    whereParameter.delete('page')
    whereParameter.set("client_id",req.user.client_id)

    return whereParameter;
  }

  /**
   * getting data from materlized view use when not use where as parameter
   * @param {*} tableName 
   */
  CountDataWithMaterialized = async (tableName, client_id) => {
    let sql = `select count("${tableName}_id") as count from ${tableName} where client_id = ${client_id}`;
    console.log(sql)
    let count = await sequelize.query(sql,
        {
          type: QueryTypes.SELECT,
        },
      );
    return parseInt(count[0].count);;
  }

  /**
   * getting pagination need by counting table with where conditirion sql.
   * @param {*} tableName 
   */
  CountDataWithWhereParameter = async (tableName, client_id) => {
    let sql = `select count("${tableName}_id") as count from ${tableName} where client_id = ${client_id}`
    let count = await sequelize.query(sql) (sql,
      {
        type: QueryTypes.SELECT,
      },
    );
    return parseInt(count[0].count);;
  }

}

module.exports = Pagination;