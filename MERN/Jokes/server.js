const express = require('express')
const app = express();
const mongoose = require('mongoose')

app.use(express.json(), express.urlencoded({ extended: true }));

require('./server/config/mongoose.config')
require('./server/routes/jokes.routes')(app)

app.listen(8000, () => console.log('All operations running on Starship 8000'));