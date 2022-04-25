var express = require('express');
var router = express.Router();

const controllers = require("../../../controllers");
const game = require('../../../controllers/gamerps')
const restrict = require("../../middlewares/restrict");

//auth controller 
router.get("/api/v1/auth/whoami", restrict, controllers.auth.whoami);
router.get("/api/v1/game/profile", restrict, game.profile);
//auth controller end 

//score controller
router.get("/api/v1/score/get", restrict, controllers.score.getScore);
//score controller end 

module.exports = router;