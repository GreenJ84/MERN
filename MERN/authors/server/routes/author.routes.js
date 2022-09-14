const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.post('/author/new', AuthorController.createNew);
    app.get('/authors/get', AuthorController.findAll);
    app.get('/author/:id', AuthorController.findOne);
    app.put('/author/update/:id', AuthorController.update);
    app.delete('/author/delete/:id', AuthorController.delete);
}