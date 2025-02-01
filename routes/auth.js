const express = require("express");
const router = express.Router();
const passport = require("passport");

//@desc Auth with Google
//@router GET /auth/google     ?this listens for the '/' tand triggers the response

router.get("/google", passport.authenticate("google", { scope: ["profile"] })); //strategy, then asking for profile data

//@desc Google auth callback
//@router GET /auth/google/callback

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }), //if it fails go to  root
  (req, res) => {
    console.log(req.user);
    console.log("I'm going to dashboard");
    res.redirect("/dashboard");
  }
); 

// but if it passes go to the dashboard
// an object specifying a failure redirect.
//@desc Logout user
//@route /auth/logout

router.get("/logout", (req, res, next) => {
  console.log("I'm logging out");
  req.logout((err) => {
    if (err) {
      return next(error);
    }
    res.redirect("/");
  });
});
module.exports = router;
