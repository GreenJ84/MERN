const express = require('express')
const app = express();
const port = 8000;

app.listen(port, ()=> {
    console.log(`All operations involving syndicate ${port} are confirmed..`)
});