const mongoose = require('mongoose');
const database = 'product_manager_db';


mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Connection establoished with the colony of ${database}`))
    .catch(err => console.log(`*skreech* captain we wont make it, the ${database} never connected...we are dying...`));