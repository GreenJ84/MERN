const PersonController = require('../controllers/person.controller');

module.exports = app => {

    app.get('/api/hello_world/', PersonController.index );
    
}