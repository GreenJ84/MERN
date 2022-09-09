const mongoose = require('mongoose')
const database = 'jokes_api'

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log(`Established connection to master starship: ${database}`))
    .catch(err => console.log(`Something went wring during boarding the ${database}`, err))