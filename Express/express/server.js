const express = require('express');
const app = express();
const port = 8000; 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const menuItems = [
    {name: 'Burger', price: 12},
    {name: 'Pizza' , price: 8},
    {name: 'Calamri', price: 22},
    {name: 'Lasagna', price: 16},
    {name: 'Spaghetti', price: 12}
]

app.get("/api", (req, res) => {
    res.json({ message: "Hello all who sees "})
});

app.get("/api/menu", (req, res) => {
    res.json({
        count: menuItems.length,
        results: menuItems
    });
});

app.post("/api/menu", ( req, res ) => {
    menuItems.push( req.body );
    console.log( req.body );
    res.json({
        count: menuItems.length,
        results: menuItems
    })
});

app.put('/api/menu/:id', (req, res)=> {
    menuItems[req.params.id] = req.body;
    res.json({
        count: menuItems.length,
        results: menuItems
    })
})

app.delete('/api/menu/:id', (req, res) =>{
    menuItems.splice( req.params.id, 1);
    res.json({
        count: menuItems.length,
        results: menuItems
    })
})


app.listen( port, () => console.log(`You have  walked thorugh Platform: ${port} `));