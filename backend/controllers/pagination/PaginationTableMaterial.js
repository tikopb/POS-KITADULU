
class PaginationTableMaterial{
    GetColumnmaterialSearch(tableName, qValue){
        let whereColumnName =[];
        switch (tableName) {
            case 'productcategory':
                whereColumnName = {
                    'name': qValue,
                    'description': qValue
                };
            break;
            default:
            break;
        }
        return whereColumnName;
    }
}

module.exports = PaginationTableMaterial;