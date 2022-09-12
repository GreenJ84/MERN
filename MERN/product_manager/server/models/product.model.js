const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product Title is required!"],
        min: [4, "Title must be longer than 3 characters."]
    },
    price: {
        type: Number,
        required: [true, "Thr Product must have a price!"],
        min: [.5, "Price must be above 50 cents to be sold here."]
    },
    description: {
        type: String,
        required: [true, "Consumers must know what they are getting!"],
        min: [8, "You really cant describe a product with less than 8 characters...."]
    }
});
module.exports.Product = mongoose.model("Product", ProductSchema);