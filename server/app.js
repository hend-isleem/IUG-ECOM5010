const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

//homework
/*
1. POST: /user: This api should return the data sent to it in JSON format
 in addition to your name, and it should return it in JSON format  too,
  for example If I sent {“name”:”taymaa”} 
  I should get the{“message”:”hello”, “name”:”taymaa”}

2. GET: /user?<name>: This api should 
return a greeting message with the name sent in the URL,
 for example if I sent a GET request to /user?name=Ali
  I should get {“message”:”Hello taymaa”} 
*/

app.get("/", (req, res) => {
  res.end("Hi from Hend's server :)");
});

app.get("/user", (req, res) => {
  //   console.log("haha  " + JSON.stringify(req.query));
  res.json({ message: "Hello " + req.query.name });
});

app.post("/user", (req, res) => {
  var data = req.body;
  data.name = "Hend";
  data.success = true;
  res.json(data);
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
