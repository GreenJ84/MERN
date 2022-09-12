const mongoose = require('mongoose')
const database = 'people_db';

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`No problems have been made while reaching out to the savages of ${database}`))
    .catch(err => console.log(`It looks like something has gone wrong contaction ${database}`, err));