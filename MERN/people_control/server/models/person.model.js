const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is Required!"],
        min: [3, "First Name must be more than 4 characters."]
    },
    lastName: {
        type: String,
        required: [true, "Last name is Required!"],
        min: [4, "Last Name must be more than 4 characters."]
    }
}, {timestamps: true});

module.exports.Person = mongoose.model("Person", PersonSchema);