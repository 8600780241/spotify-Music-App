const mongoose = require('mongoose');


const connctDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("successfully connected with mongodb database")
    }
    catch (error) {
        console.log(`mongoDB connection error ${error}`)
    }
}

module.exports = connctDb;