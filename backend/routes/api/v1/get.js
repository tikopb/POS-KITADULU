var express = require('express');
var router = express.Router();

const controllers = require("../../../controllers")
const restrict = require("../../middlewares/restrict")

//auth controller 
router.get("/api/v1/auth/whoami", restrict, controllers.auth.whoami)
//auth controller end 

//produt controller start
router.post("/api/v1/product/CreateProduct", restrict,controllers.product.CreateProduct);
//produt controller end

module.exports = router;