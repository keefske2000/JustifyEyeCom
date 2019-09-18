//npm modules
const express = require('express');
const passport = require('passport');

// create the server
const app = express();

// create the homepage route at '/'
app.get('/', (req, res) => {
  res.send('you just hit the home page\n')
})

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

  app.post('/login',
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

  app.post('/login',
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true }));

  
/* GET Google Authentication API. */
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  function(req, res) {
      var token = req.user.token;
      res.redirect("http://localhost:3000/home?token=" + token);
  }
);
                    

 
// tell the server what port to listen on
app.listen(3000, () => {
  console.log('Listening on localhost:3000')
})