const express = require('express');
const app = express();
const port = 8000;

app.listen(port, () => {
    console.log(`Starship ${ port } is up and running at full capacity!`);
});
