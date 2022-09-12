const { Product } = require('../models/product.model')

module.exports.findAll = (req, res) => {
    Product.find()
        .then((allProducts) => res.json({products: allProducts}))
        .catch( (err) => res.json({error: err})
)};

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((product) => res.json({newProduct: product}))
        .catch((err) => res.json({
            message: "Something went wrong",
            error: err
        }))
};

module.exports.findOne = (req, res) => {
    Product.findOne({_id: req.params.id })
        .then(thisProduct => res.json({ product: thisProduct}))
        .catch( err => res.json({
            message: "Something went wrong",
            error: err
        }))
};

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(product => res.json({newProduct: product}))
        .catch(err => res.json({
            message: "Something went wrong",
            error: err
        }))
};

module.exports.delete = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(results => res.json({result: results}))
    .catch( err => res.json({
        message: "Something went wrong",
        error: err
    }))
};
