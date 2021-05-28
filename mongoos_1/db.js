const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/Assignmentdb", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        console.log("MongoDB connection Established");
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}
module.exports = connectDB;