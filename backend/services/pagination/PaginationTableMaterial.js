
/**
 * this class use for mapping all table when need searching feature 
 */
class PaginationTableMaterial{
    GetColumnmaterialSearch(tableName, qValue){
        let whereColumnName =[];
        switch (tableName) {
            case 'product':
            whereColumnName = {
                'name': qValue,
                'description': qValue
            };
            case 'productcategory':
            whereColumnName = {
                'name': qValue,
                'description': qValue
            };
            case 'business_partner':
            whereColumnName = {
                'value': qValue,
                'name': qValue,
                'description': qValue
            };
            case 'uom':
            whereColumnName = {
                'name': qValue,
                'description': qValue
            };
            case 'warehouse':
            whereColumnName = {
                'value': qValue,
                'name': qValue,
                'description': qValue
            };
            default:
            break;
        }
        return whereColumnName;
    }
}

module.exports = PaginationTableMaterial;