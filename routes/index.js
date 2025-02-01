const express = require("express");
const router = express.Router();
const{ensureAuth, ensureGuest}
 = require('../middleware/auth')
//@desc Login/landing page
//@router GET /     ?this listens for the '/' tand triggers the response
router.get("/", ensureGuest,function(req,res){
    res.render("login");
})
//@desc Dashboard
//@router GET /dashboard
router.get("/dashboard", ensureAuth,function(req,res){
    console.log(req.user);
    res.render("dashboard");
})

module.exports = router;