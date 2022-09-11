const express = require('express');
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const app = express();
const port = 8000;
require('./server/routes/person.routes')(app);

app.use(cors(corsOptions));

app.listen(port, () => {
    console.log(`Starship ${ port } is up and running at full capacity!`);
});
