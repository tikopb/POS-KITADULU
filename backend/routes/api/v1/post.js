const router = require("express").Router();

const controllers = require("../../../controllers");
const restrict = require("../../middlewares/restrict");
const apiV = "v1";

//login and register
router.post("/api/v1/auth/register", controllers.auth.register);
router.post("/api/v1/auth/login", controllers.auth.login);
router.post("/api/v1/auth/whoami", restrict, controllers.auth.whoami);
router.post("/api/v1/auth/logout", controllers.auth.logout);
//login and register end

//organization start
router.post("/api/v1/org/get", restrict, controllers.org.Get);
router.post("/api/v1/org/getAll", restrict, controllers.org.GetAll);
router.post("/api/v1/org/create", restrict, controllers.org.Generate);
router.post("/api/v1/org/update", restrict, controllers.org.Update);
router.post("/api/v1/org/delete", restrict, controllers.org.Delete);
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
router.post("/api/v1/orgaccsess/get", restrict, controllers.OrgAccsessController.Get,);
router.post("/api/v1/orgaccsess/getAll", restrict, controllers.OrgAccsessController.GetAll,);
router.post("/api/v1/orgaccsess/create",restrict,controllers.OrgAccsessController.Generate,);
router.post( "/api/v1/orgaccsess/update", restrict, controllers.OrgAccsessController.Update,);
router.post("/api/v1/orgaccsess/delete",restrict,controllers.OrgAccsessController.Delete,);
//OrgAccsessController end

//Businesspartner start
router.post("/api/v1/businessPartner/get", restrict, controllers.Businesspartner.Get);
router.post("/api/v1/businessPartner/getAll", restrict, controllers.Businesspartner.GetAll);
router.post("/api/v1/businessPartner/create",restrict,controllers.Businesspartner.Create);
router.post( "/api/v1/businessPartner/update", restrict, controllers.Businesspartner.Update);
router.post("/api/v1/businessPartner/delete",restrict,controllers.Businesspartner.Delete);
//Businesspartner end

//warehouse start
router.post("/api/v1/warehouse/get", restrict, controllers.Warehouse.Get);
router.post("/api/v1/warehouse/getAll", restrict, controllers.Warehouse.GetAll);
router.post("/api/v1/warehouse/create",restrict,controllers.Warehouse.Create);
router.post( "/api/v1/warehouse/update", restrict, controllers.Warehouse.Update);
router.post("/api/v1/warehouse/delete",restrict,controllers.Warehouse.Delete);
//warehouse end

//locator start
router.post("/api/v1/locator/get", restrict, controllers.Locator.Get);
router.post("/api/v1/locator/getAll", restrict, controllers.Locator.GetAll);
router.post("/api/v1/locator/create",restrict,controllers.Locator.Create);
router.post( "/api/v1/locator/update", restrict, controllers.Locator.Update);
router.post("/api/v1/locator/delete",restrict,controllers.Locator.Delete);
//locator end

module.exports = router;
