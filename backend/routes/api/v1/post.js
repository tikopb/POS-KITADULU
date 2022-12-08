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

//organization and client
router.post(
  "/api/v1/client/CreateClientAndOrganization",
  controllers.client.CreateClientAndOrganization,
);
router.post("/api/v1/client/UpdateClient", controllers.client.UpdateClient);
router.post(
  "/api/v1/organization/UpdateOrganization",
  controllers.org.UpdateOrganization,
);
//organization and client end

//product category start
router.post("/api/v1/productCategory/create", restrict, controllers.productCategories.Create);
router.post("/api/v1/productCategory/getAll", restrict, controllers.productCategories.GetAll);
router.post("/api/v1/productCategory/update", restrict, controllers.productCategories.Update);
router.post("/api/v1/productCategory/delete", restrict, controllers.productCategories.Delete);
//product category end

//Product start
router.post("/api/v1/product/createProduct", controllers.product.CreateProduct);
router.post("/api/v1/product/updateProduct", controllers.product.UpdateProduct);
router.post("/api/v1/product/deleteProduct", controllers.product.DeleteProduct);
router.post("/api/v1/product/getAllProductForPOSJoin", controllers.product.getAllProductForPOSJoin);
//Product end

//uom start
router.post("/api/v1/uom/get", restrict, controllers.uom.Get);
router.post("/api/v1/uom/getAll", restrict, controllers.uom.GetAll);
router.post("/api/v1/uom/create", restrict, controllers.uom.Create);
router.post("/api/v1/uom/update", restrict, controllers.uom.Update);
router.post("/api/v1/uom/delete", restrict, controllers.uom.Delete);
//uom end

//uom convertion start
router.post(
  "/api/v1/uomconvertion/getAll",
  restrict,
  controllers.uomConvertion.GetAllBasePropduct,
);
router.post(
  "/api/v1/uomconvertion/create",
  restrict,
  controllers.uomConvertion.Create,
);
router.post(
  "/api/v1/uomconvertion/update",
  restrict,
  controllers.uomConvertion.Update,
);
router.post(
  "/api/v1/uomconvertion/delete",
  restrict,
  controllers.uomConvertion.Delete,
);
//uom convertion end

//OrgAccsessController start
router.post("/api/v1/orgaccsess/create",restrict,controllers.OrgAccsessController.Generate,);
router.post("/api/v1/orgaccsess/getAll", restrict, controllers.OrgAccsessController.GetAll,);
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

module.exports = router;
