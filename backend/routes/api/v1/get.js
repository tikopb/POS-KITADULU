var express = require("express");
var router = express.Router();

const controllers = require("../../../controllers");
const restrict = require("../../middlewares/restrict");

//auth controller
router.get("/api/v1/auth/whoami", restrict, controllers.auth.whoami);
router.get(
  "/api/v1/refresh-token",
  controllers.refreshController.handleRefreshToken,
);
//auth controller end

module.exports = router;
