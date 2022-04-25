const router = require("express").Router()

const controllers = require("../../../controllers");
const games = require('../../../controllers/gamerps');
const restrict = require("../../middlewares/restrict");


//login and register
router.post("/api/v1/auth/register", controllers.auth.register);
router.post("/api/v1/auth/login", controllers.auth.login);
router.put("/api/v1/auth/update", restrict, controllers.auth.updateProfile);
//login and register end 

// Game
router.post("/api/v1/game/rps", restrict, games.game);
//game end 

//score 
router.post("/api/v1/score/add", restrict, controllers.score.pushScore);
//score end 

module.exports = router;