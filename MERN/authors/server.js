const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config');
require('./server/routes/author.routes')(app);

app.listen(port, () => {
    console.log(`Operations at base ${port} are all exceptional!`);
})