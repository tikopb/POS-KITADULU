const router = require("express").Router()

const controllers = require("../../../controllers")
const restrict = require("../../middlewares/restrict")

//login and register
router.post("/api/v1/auth/register", controllers.auth.register);
router.post("/api/v1/auth/login", controllers.auth.login);
//login and register end 

module.exports = router;