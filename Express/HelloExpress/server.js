const express = require("express");
const app = express();
const port = 8000;

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Hello to those who know!");
});

app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${port}!`)
);
