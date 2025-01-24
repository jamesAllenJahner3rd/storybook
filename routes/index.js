const express = require("express");
const router = express.Router();

//@desc Login/landing page
//@router GET /     ?this listens for the '/' tand triggers the response
router.get("/", function(req,res){
    res.render("login");
})
//@desc Dashboard
//@router GET /dashboard
router.get("/dashboard", function(req,res){
    res.render("dashboard");
})

module.exports = router;