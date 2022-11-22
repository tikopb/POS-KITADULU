const allowedOrigins = require("../lib/allowedOrigin");

//console.log(allowedOrigins);
const corsOptions = {
  origin: (origin, callback) => {
    console.log("asd");
    console.log(origin, allowedOrigins);
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      console.log(allowedOrigins);
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
