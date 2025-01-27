const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require("mongoose");
const User = require("../models/User.js");
// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));
module.exports = function(passport){// this was passed in from the app.js
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL:"/auth/google/callback"
            },
            async(accessToken, RefreshToken, profile,done)=>{
// done is the callback we call for the we need to  finish.
                console.log(profile);
            }
        )
    )
    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((user, done) =>{
        User.findById(id,(err,user) => done(err, user));
    });
}