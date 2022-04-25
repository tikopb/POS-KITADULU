var express = require('express');
var router = express.Router();
const apiV1Post = require("./api/v1/post");
const apiV1Get = require("./api/v1/get");

//api *start*
router.use(apiV1Post);
router.use(apiV1Get);
//api *end*

module.exports = router;