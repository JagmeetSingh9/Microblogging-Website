const mongoose = require("mongoose");
require("dotenv").config();

// const connection = mongoose.connect(process.env.mongoURL);

// module.exports = { connection };
const connection=async() =>{
    try {
        const conn=await mongoose.connect(process.env.mongo_url)
        console.log(`Connected to mongodb database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
};

module.exports = { connection };