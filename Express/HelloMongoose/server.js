const express = require("express");
const app = express();
const mongoose = require('mongoose');

app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/config/mongoose.config");
require("./server/routes/user.routes")(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
