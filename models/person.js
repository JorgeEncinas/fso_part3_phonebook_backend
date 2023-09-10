const mongoose = require("mongoose")
const url = process.env.MONGODB_URI_PHONEBOOK

mongoose.set("strictQuery", false)
mongoose.connect(url)
    .then(result => {
        console.log("Connected to MongoDB")
    })
    .catch(error => {
        console.log("Error connecting to MongoDB:", error)
    })

const personSchema = mongoose.Schema({
    name: String,
    number: String,
})

personSchema.set("toJSON", {
    transform: (document, returnedObj) => {
        returnedObj.id = returnedObj._id.toString();
        delete returnedObj._id
        delete returnedObj.__v
    }
})

const Person = mongoose.model("Person", personSchema)
module.exports = Person