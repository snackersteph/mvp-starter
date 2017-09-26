var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var database = require('../database-mysql/index.js');
// var items = require('../database-mongo');
// var bodypars = require('urlencoded-body-parser');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
// app.use(bodypars);

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.post('/snacks', function(req, res){
  console.log("SERVER POST RECEIVED", req.body)
  let itemName = req.body.name;
  if(!itemName) {
    res.sendStatus(400);
  } else {
    console.log("POST SUCCESS!!!!!!!!");
    database.addNewSnackItem(itemName, function(err, data) {
      if(err) {
        res.sendStatus(500);
      } else {
        res.json(data);
      }
    });
  }
}
);


app.get('/snacks', function (req, res) {
  console.log("CHECK CHECK GET GET")
  database.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

