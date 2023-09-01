const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/post", (req, res) => {
  res.json(req.body);
});

app.listen(80, () => {
  console.log("the server is running at port 80");
});
