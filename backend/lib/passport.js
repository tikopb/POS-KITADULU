const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { Users } = require("../models");
require("dotenv").config();

/* Passport JWT Options */
const options = {
  // Untuk mengekstrak JWT dari request, dan mengambil token-nya dari header yang bernama Authorization
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

  /* Harus sama seperti dengan apa yang kita masukkan sebagai parameter kedua dari jwt.sign di user_game Model.
     Inilah yang kita pakai untuk memverifikasi apakah tokennya dibuat oleh sistem kita */
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

passport.use(
  new JwtStrategy(options, async (payload, done) => {
    // payload adalah hasil terjemahan JWT, sesuai dengan apa yang kita masukkan di parameter pertama dari jwt.sign
    Users.findByPk(payload.id)
      .then((user) => done(null, Users))
      .catch((err) => done(err, false, { message: err.message }));
  }),
);

module.exports = passport;
