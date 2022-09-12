const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
const port = 8000;



// app.use(cors)
app.use(express.json(), express.urlencoded({extended: true}))
require('./server/config/mongoose.config');
require('./server/routes/product.routes')(app)

app.listen(port, () => console.log(`All backend operations running smoothly on port:${port}`))