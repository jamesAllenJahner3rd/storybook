const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan')
const connectDB = require("./config/db");
const ejs =require("ejs");
const indexRoutes = require("./routes/index");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
// load the config
dotenv.config({path: './config/config.env'});

//Passport config
require("./config/passport")(passport)//i'm passing variable passport as an arguement

connectDB();

const app = express();

if (process.env.NODE_ENV ==='development'){
    app. use(morgan('dev'))
}
// EJS
app.set('view engine', 'ejs');

//Express-session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
//Passport middleware
app.use(passport.initialize);
app.use(passport.session);
//static folder
app.use(express.static(path.join(__dirname,"public")));

//Routes
app.use('/',indexRoutes)

const PORT = process.env.PORT || 5000;
//NODE_ENV is going to let us know what stage of development we're in when booting.
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));