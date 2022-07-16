var auth = require('./authController');
var product = require('./productController');
var org = require('./orgController');
var client = require('./clientController');
var productCategories = require('./productCategoryController');
var uomConvertion = require('./UomConvertionController');

module.exports = {
    auth, product, org, client, productCategories, uomConvertion
}