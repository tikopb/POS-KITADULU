const router = require("express").Router();

const controllers = require("../../../controllers");
const restrict = require("../../middlewares/restrict");
const apiV = "v1";

//login and register
router.post("/api/v1/auth/register", controllers.auth.register);
router.post("/api/v1/auth/login", controllers.auth.login);
router.post("/api/v1/auth/whoami", restrict, controllers.auth.whoami);
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
router.post(
  "/api/v1/productCategory/create",
  controllers.productCategories.Create,
);
router.post(
  "/api/v1/productCategory/getAll",
  controllers.productCategories.GetAll,
);
//product category end

//Product start
router.post("/api/v1/product/createProduct", controllers.product.CreateProduct);
router.post("/api/v1/product/updateProduct", controllers.product.UpdateProduct);
router.post("/api/v1/product/deleteProduct", controllers.product.DeleteProduct);
router.post(
  "/api/v1/product/getAllProductForPOSJoin",
  controllers.product.getAllProductForPOSJoin,
);
//Product end

//uom start
router.post("/api/v1/uom/getById", restrict, controllers.uom.Get);
router.post("/api/v1/uom/getAll", restrict, controllers.uom.GetAll);
router.post("/api/v1/uom/create", controllers.uom.Create);
router.post("/api/v1/uom/update", restrict, controllers.uom.Update);
router.post("/api/v1/uom/delete", restrict, controllers.uom.Delete);
//uom end

//uom convertion
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

module.exports = router;
