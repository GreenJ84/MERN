const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        require: [true, "The Author must have a name!"],
        minlength: [3, "The Author's name must be at least 3 Characters long!"]
    }
}, {timestamps: true});
module.exports.Author = mongoose.model('Author', AuthorSchema);