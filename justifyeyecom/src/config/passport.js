var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;passport.serializeUser(function(user, done) {
 done(null, user);
});passport.deserializeUser(function(user, done) {
 done(null, user);
});passport.use(
 new GoogleStrategy(
  {
   clientID: "1030130235839-i1cbdgpbskm6bsjkkh3glp2s7bogev2r.apps.googleusercontent.com",
   clientSecret: "p1mKe8iEA4ExoH_1JDWHoAJy",
   callbackURL: "http://localhost:3000/home"
  },
  function(accessToken, refreshToken, profile, done) {
   var userData = {
    email: profile.emails[0].value,
    name: profile.displayName,
    token: accessToken
   };
   done(null, userData);
  }
 )
);