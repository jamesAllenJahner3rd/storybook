const express = require("express");
const router = express.Router();
const passport = require("passport");
//@desc Auth with Google
//@router GET /auth/google     ?this listens for the '/' tand triggers the response
router.get("/google", passport.authenticate("google", { scope: ['profile'] } ));//strategy, then asking for profile data

//@desc Dashboard
//@router GET /dashboard
router.get("/dashboard", function(req,res){
    res.render("dashboard");
})

module.exports = router;