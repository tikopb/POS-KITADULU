
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
            break;
            case 'business_partner':
            whereColumnName = {
                'value': qValue,
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