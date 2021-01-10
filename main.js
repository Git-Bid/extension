var express = require("express");
var app = express();

const server = app.listen(3001, () => {
  console.log("listening on port %s...", server.address().port);
});

app.get("/", (req, res) => res.send("Hello World!"));
