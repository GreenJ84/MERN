const PersonController = require('../controllers/person.controller')

module.exports = app => {
    
    app.get('/api', PersonController.index);
    
    app.post('/api/person/new', PersonController.createPerson);

    app.get('/api/people/all', PersonController.findAllpeople);

}