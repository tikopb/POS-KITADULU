const router = require("express").Router();
const multer = require("multer");

const controllers = require("../../../controllers");
const restrict = require("../../middlewares/restrict");
var uploud = multer({dest: "./services/BulkImport/upload"}); 

//login and register
router.post("/api/v1/auth/register", controllers.auth.register);
router.post("/api/v1/auth/login", controllers.auth.login);
router.post("/api/v1/auth/whoami", restrict, controllers.auth.whoami);
router.post("/api/v1/auth/logout", controllers.auth.logout);
//login and register end

//organization start
router.get("/api/v1/org/", restrict, controllers.org.Index);
router.get("/api/v1/org/:id", restrict, controllers.org.Show);
router.post("/api/v1/org/", restrict, controllers.org.Generate);
router.put("/api/v1/org/:id", restrict, controllers.org.Update);
router.delete("/api/v1/org/:id", restrict, controllers.org.Delete);
//organization end

//product category start
router.get("/api/v1/productCategory/", restrict, controllers.productCategories.Index);
router.get("/api/v1/productCategory/:id", restrict, controllers.productCategories.Show);
router.post("/api/v1/productCategory/", restrict, controllers.productCategories.Create);
router.put("/api/v1/productCategory/:id", restrict, controllers.productCategories.Update);
router.delete("/api/v1/productCategory/:id", restrict, controllers.productCategories.Delete);
//product category end

//Product start
router.get ("/api/v1/product/",restrict,controllers.product.Index);
router.get("/api/v1/product/:id", restrict, controllers.product.Show);
router.post("/api/v1/product/",restrict, controllers.product.Create);
router.put("/api/v1/product/:id", restrict, controllers.product.Update);
router.delete("/api/v1/product/:id", restrict, controllers.product.Delete);
//Product end

//uom start
router.get("/api/v1/uom/", restrict, controllers.uom.Index);
router.get("/api/v1/uom/:id", restrict, controllers.uom.Show);
router.post("/api/v1/uom/", restrict, controllers.uom.Create);
router.put("/api/v1/uom/:id", restrict, controllers.uom.Update);
router.delete("/api/v1/uom/:id", restrict, controllers.uom.Delete);
//uom end

//uom convertion start
router.post("/api/v1/uomconvertion/getAll", restrict, controllers.uomConvertion.GetAllBasePropduct,);
router.post("/api/v1/uomconvertion/create", restrict, controllers.uomConvertion.Create,);
router.post("/api/v1/uomconvertion/update", restrict, controllers.uomConvertion.Update,);
router.post("/api/v1/uomconvertion/delete", restrict, controllers.uomConvertion.Delete,);
//uom convertion end

//OrgAccsessController start
router.post("/api/v1/orgaccsess/get", restrict, controllers.OrgAccsessController.Get);
router.post("/api/v1/orgaccsess/getAll", restrict, controllers.OrgAccsessController.GetAll);
router.post("/api/v1/orgaccsess/create",restrict,controllers.OrgAccsessController.Generate);
router.post( "/api/v1/orgaccsess/update", restrict, controllers.OrgAccsessController.Update);
router.post("/api/v1/orgaccsess/delete",restrict,controllers.OrgAccsessController.Delete);
//OrgAccsessController end

//Businesspartner start
router.get("/api/v1/businessPartner/", restrict, controllers.Businesspartner.Index);
router.get("/api/v1/businessPartner/:id", restrict, controllers.Businesspartner.Show);
router.post("/api/v1/businessPartner/",restrict,controllers.Businesspartner.Create);
router.put("/api/v1/businessPartner/:id", restrict, controllers.Businesspartner.Update);
router.delete("/api/v1/businessPartner/:id", restrict, controllers.Businesspartner.Delete);
//Businesspartner end

//warehouse start
router.get("/api/v1/warehouse/", restrict, controllers.Warehouse.Index);
router.get("/api/v1/warehouse/:id", restrict, controllers.Warehouse.Show);
router.post("/api/v1/warehouse/",restrict,controllers.Warehouse.Create);
router.put( "/api/v1/warehouse/:id", restrict, controllers.Warehouse.Update);
router.delete("/api/v1/warehouse/:id",restrict,controllers.Warehouse.Delete);
//warehouse end

//locator start
router.get("/api/v1/locator/", restrict, controllers.Locator.Index);
router.get("/api/v1/locator/:id", restrict, controllers.Locator.Show);
router.post("/api/v1/locator/",restrict,controllers.Locator.Create);
router.put("/api/v1/locator/:id", restrict, controllers.Locator.Update);
router.delete("/api/v1/locator/:id",restrict,controllers.Locator.Delete);
//locator end

//Role start
router.get("/api/v1/role/", restrict, controllers.Role.Index);
router.get("/api/v1/role/:id", restrict, controllers.Role.Show);
router.post("/api/v1/role/",restrict,controllers.Role.Create);
router.put("/api/v1/role/:id", restrict, controllers.Role.Update);
router.delete("/api/v1/role/:id",restrict,controllers.Role.Delete);
//locator end

//Role start
router.get("/api/v1/karyawan/", restrict, controllers.Karyawan.Index);
router.get("/api/v1/karyawan/:id", restrict, controllers.Karyawan.Show);
router.post("/api/v1/karyawan/",restrict,controllers.Karyawan.Create);
router.put("/api/v1/karyawan/:id", restrict, controllers.Karyawan.Update);
router.delete("/api/v1/karyawan/:id",restrict,controllers.Karyawan.Delete);
//locator end


// bulk import start
router.post("/api/v1/bulk/productCategory/", uploud.single('file'), controllers.productCategories.BulkUploud);
router.get("/api/v1/download/productCategory/", restrict , controllers.productCategories.DownloadTemplate);


// bulk import end

module.exports = router;