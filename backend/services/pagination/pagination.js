const sequelize = require('../../config/db');
const { QueryTypes } = require("sequelize");
const PaginationTableMaterial = require('./paginationTableMaterial');
const { Op } = require("sequelize");

class Pagination{
  constructor(user, query){
    this.user = user
    this.query = query
  }

  /**
   * getting pagination data if where just client id than get with materilized view
   * @param {*} offset 
   * @param {*} limit 
   * @param {*} tableName 
   */
  PaginationGet = async(tableName) => {
    const WhereMap = await this.GetWhereMapOrm(tableName);
    let validationWhereMap = await this.WhereMapMoreThenOneParameterValidate(WhereMap);
    let total_data = 0;
    let limit = this.query.page_size || 20
    const page = parseInt(this.query.page) || 1;
    let offset = limit * (page - 1);

    if(validationWhereMap){
      const sql = await this.GetWhereSql(tableName);
      total_data = await this.CountDataWithWhereParameter(tableName, this.user.client_id, sql);
    }else{
      total_data = await this.CountDataWithMaterialized(tableName, this.user.client_id);
    }
    let  total_page = Math.ceil(total_data / limit);
    console.log(`total_data: ${total_data} && limit ${limit}`)
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
  GetWhereMapOrm = async (tableName) => {
    const paginationTableMaterial = new PaginationTableMaterial(); //class decalare
    let searchParams = this.query;
    if ('q' in searchParams) {
      searchParams = await paginationTableMaterial.GetColumnmaterialSearch(tableName, this.query.q);
    }

    const whereClause = {
      client_id: this.user.client_id
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
   * getting data pagination with materlized view
   * @param {*} tableName 
   */
   WhereMapMoreThenOneParameterValidate = async (WhereMap) => {
    let validationValue = false;
    delete WhereMap.client_id;

    if(Object.keys(WhereMap).length > 0){
      validationValue = true
    }
    return Object.keys(WhereMap).length
  };

  /**
   * Getting sql for condition with function search more than one condition
   * @returns 
   */
  GetWhereSql = async (tableName) => {
    const paginationTableMaterial = new PaginationTableMaterial(); //class decalare
    let searchParams = thisquery;
    if ('q' in searchParams) {
      searchParams = await paginationTableMaterial.GetColumnmaterialSearch(tableName, query.q);
    }
    let sql ='';
    let i = 0;

    for (const key in searchParams) {
      if(key !== 'page'){
        if(key !=='page_size'){
          const value = searchParams[key].toLowerCase();
          if (i === 0) {
            sql += ` lower (${key}) like '%${value}%' `;
          } else {
            sql += ` or lower (${key}) like '%${value}%' `;
          }
          i++;
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

    let sql = `select coalesce(count("${tableName}_id"),0) as count from ${tableName} where client_id = ${client_id} and ( ${paramSql} )` 
    console.log(`dounting data ==== ${sql}`)
    let count = await sequelize.query(sql,
      {
        type: QueryTypes.SELECT,
      },
    );
    return parseInt(count[0].count);;
  }

}

module.exports = Pagination;