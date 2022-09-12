const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3
    },
    lastName: {
        type: String,
        required: true,
        min: 4
    }
}, {timestamps: true});

module.exports.Person = mongoose.model("Person", PersonSchema);