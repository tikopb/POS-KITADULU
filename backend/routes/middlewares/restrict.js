//const passport = require('../../lib/passport')

//module.exports = passport.authenticate("jwt", { session: false });

const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err) return res.sendStatus(403);
    req.user = decode.user;
    next();
  });
};

module.exports = verifyJWT;
