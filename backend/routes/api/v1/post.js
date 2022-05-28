const router = require("express").Router()

const controllers = require("../../../controllers")
const restrict = require("../../middlewares/restrict")

//login and register
router.post("/api/v1/auth/register", controllers.auth.register);
router.post("/api/v1/auth/login", controllers.auth.login);
//login and register end 

//Product start
router.post("/api/v1/product/createProduct", restrict ,controllers.product.CreateProduct);
router.post("/api/v1/product/updateProduct", restrict ,controllers.product.UpdateProduct);
router.post("/api/v1/product/deleteProduct", restrict ,controllers.product.DeleteProduct);
//Product end

module.exports = router;