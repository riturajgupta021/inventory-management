const mongoose = require("mongoose")
const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/inventeryManagement" )
        console.log("Connected to database")
    } catch (error) {
        console.error("Error connecting to database", error)
    }
}
module.exports = connectToDb