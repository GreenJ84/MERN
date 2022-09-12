const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.get('/api/products/all', ProductController.findAll);

    app.get('/api/products/:id', ProductController.findOne);

    app.post('/api/products/new', ProductController.createProduct);

    app.put('/api/products/update/:id', ProductController.updateProduct);

    app.delete('/api/products/delete/:id', ProductController.delete);
}