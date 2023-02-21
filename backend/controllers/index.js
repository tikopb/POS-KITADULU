const auth = require("./authController");
const product = require("./productController");
const org = require("./orgController");
const client = require("./clientController");
const productCategories = require("./productCategoryController");
const uomConvertion = require("./UomConvertionController");
const uom = require("./uomController");
const OrgAccsessController = require("./OrgAccsessController");
const refreshController = require("./refreshTokenController");
const Businesspartner = require("./BusinessPartnerController");
const Warehouse = require("./warehouseController");
const Locator = require("./locatorController");
const Role = require("./RoleController");
const Karyawan = require("./karyawanController");

module.exports = {
  auth,
  product,
  org,
  client,
  productCategories,
  uomConvertion,
  uom,
  OrgAccsessController,
  refreshController,
  Businesspartner,
  Warehouse,
  Locator,
  Role,
  Karyawan
};
