var auth = require('./authController');
var product = require('./productController');
var org = require('./orgController');
var client = require('./clientController');
var productCategories = require('./productCategoryController');
var uomConvertion = require('./UomConvertionController');
var uom = require('./uomController');
var OrgAccsessController = require('./OrgAccsessController')

module.exports = {
    auth, product, org, client, productCategories, uomConvertion, uom, OrgAccsessController
}