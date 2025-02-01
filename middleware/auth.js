module.exports = {
    ensureAuth: function(req, res, next) {
        if (req.isAuthenticated()){
            return next()
        } else{
            console.log("you've not logged in")
            res.redirect("/")
        }
    },

    ensureGuest: function (req, res, next) {
        if (req.isAuthenticated()){
            res.redirect("/dashboard")
        }else {
            return next()
        }
    }
}

