const router = require("express").Router()

const controllers = require("../../../controllers")
const restrict = require("../../middlewares/restrict")
const apiV = "v1"

//login and register
router.post("/api/v1/auth/register", controllers.auth.register);
router.post("/api/v1/auth/login", controllers.auth.login);
router.post("/api/v1/auth/updateClient", restrict, controllers.auth.UpdateClient);
//login and register end 

//organization and client
router.post("/api/v1/client/register", controllers.client.CreateClientAndOrganization);
//organization and client end 

//product category start
router.post("/api/v1/productCategory/create" , controllers.productCategories.Create);
router.post("/api/"+apiV+"/productCategory/getAll" , controllers.productCategories.GetAll);
//product category end

//Product start
router.post("/api/v1/product/createProduct", restrict ,controllers.product.CreateProduct);
router.post("/api/v1/product/updateProduct", restrict ,controllers.product.UpdateProduct);
router.post("/api/v1/product/deleteProduct", restrict ,controllers.product.DeleteProduct);
//Product end

//uom convertion
router.post("/api/v1/uomconvertion/getAll", restrict ,controllers.uomConvertion.GetAllBasePropduct);
router.post("/api/v1/uomconvertion/create", restrict ,controllers.uomConvertion.Create);
router.post("/api/v1/uomconvertion/update", restrict ,controllers.uomConvertion.Update);
router.post("/api/v1/uomconvertion/delete", restrict ,controllers.uomConvertion.Delete);
//uom convertion end

module.exports = router;