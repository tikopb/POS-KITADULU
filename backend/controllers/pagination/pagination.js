const sequelize = require('../../config/db');
const { QueryTypes } = require("sequelize");
const PaginationTableMaterial = require('./paginationTableMaterial');
const { Op } = require("sequelize");

class Pagination{
  /**
   * getting pagination data if where just client id than get with materilized view
   * @param {*} offset 
   * @param {*} limit 
   * @param {*} tableName 
   */
  PaginationGet = async(req,tableName) => {
    const WhereMap = await this.GetWhereMapOrm(req, tableName);
    let total_data = 0;
    let limit = req.query.page_size || 20
    const page = req.query.page || 1;
    let offset = limit * (page - 1);
    
    if(Object.keys(WhereMap).length > 1){
      const sql = await this.GetWhereSql(req)
      total_data = await this.CountDataWithWhereParameter(tableName, req.user.client_id, sql);
      offset = 0;
    }else{
      total_data = await this.CountDataWithMaterialized(tableName, req.user.client_id);
    }
    let  total_page = Math.ceil(total_data / limit);
    if(total_page == 0){
      total_page = 1
    }
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
  GetWhereMapOrm = async (req, tableName, res) => {
    const paginationTableMaterial = new PaginationTableMaterial(); //class decalare
    let searchParams = req.query;
    if ('q' in searchParams) {
      searchParams = await paginationTableMaterial.GetColumnmaterialSearch(tableName, req.query.q, res);
    }

    const whereClause = {
      client_id: req.user.client_id
    };
  
    const orCondition = [];
  
    for (const param in searchParams) {
      if (searchParams.hasOwnProperty(param)) {
        const value = searchParams[param];
        if (param !== 'page' && param !== 'page_size') {
          if (value === 'true' || value === 'false') {
            whereClause[param] = value || true;
          } else {
            orCondition.push({ [param]: { [Op.iLike]: `%${value}%` } });
          }
        }
      }
    }
  
    if (orCondition.length > 0) {
      whereClause[Op.or] = orCondition;
    }
  
    return whereClause;
  };
  

  /**
   * Getting sql for condition with function search more than one condition
   * @param {*} req 
   * @returns 
   */
  GetWhereSql = async (req) => {
    const searchParams = req.query;
    let sql ='';
    let i = 0;

    for (const key in searchParams) {
      if(key !== 'page'){
        if(key !=='page_size'){
          const value = searchParams[key].toLowerCase();
          sql += ` and lower ('${key}') like '%${value}%' `
        }
      }
    }
    return sql;
  }

  /**
   * getting data pagination with materlized view
   * @param {*} tableName 
   */
  CountDataWithMaterialized = async (tableName, client_id) => {
    let sql = `select coalesce(count("${tableName}_id"),0) as count from ${tableName} where client_id = ${client_id}`;
    console.log(sql)
    let count = await sequelize.query(sql,
        {
          type: QueryTypes.SELECT,
        },
      );
    return parseInt(count[0].count);
  }

  /**
   * getting pagination need by counting table with where conditirion sql.
   * @param {*} tableName 
   */
  CountDataWithWhereParameter = async (tableName, client_id, paramSql) => {

    let sql = `select coalesce(count("${tableName}_id"),0) as count from ${tableName} where client_id = ${client_id} ${paramSql}` 
    let count = await sequelize.query(sql,
      {
        type: QueryTypes.SELECT,
      },
    );
    return parseInt(count[0].count);;
  }

}

module.exports = Pagination;