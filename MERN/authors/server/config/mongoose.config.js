const mongoose = require('mongoose');
const db = 'authors_db';

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Connection to the books library ${db} all set`))
    .catch(err => console.log(`Looks like the ${db} foundations isnt to be bothered`, err));
    
