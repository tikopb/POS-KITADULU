var express = require("express");
var router = express.Router();

const controllers = require("../../../controllers");
const restrict = require("../../middlewares/restrict");

//auth controller
router.get("/api/v1/auth/whoami", restrict, controllers.auth.whoami);
//auth controller end

//product category start
router.get(
  "/api/v1/productCategories/getall",
  controllers.productCategories.GetAll,
);
//product category end

//produt controller start
router.get("/api/v1/product/GetProduct", restrict, controllers.product.Get);
//produt controller end

module.exports = router;
