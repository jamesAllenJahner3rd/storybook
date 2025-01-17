const mongoose = require("mongoose");
const connectDB = async () => {
    try{
        // the second argurements are to avoid warnings in the console.
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(err){
        console.error(`Error: ${err}`)
        process.exit(1)//this exits the promise , 1 means failure
    }
}
module.exports = connectDB; // now we can use it in the app.js file