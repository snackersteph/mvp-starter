var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

var checkIfExists = function(){

};

var addNewSnackItem = function(item, callback) {
  console.log("SENDING TO DATABASE")
  connection.query('INSERT INTO items (name, guess) values (?, ?)', [item, 'false'], function(err, results, fields) {
    if(err) {
      console.log("NOPE", err)
      callback(err, null);
    } else {
      console.log("YAYAAYAYA")
      callback(null, results);
    }
  });
};

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.addNewSnackItem = addNewSnackItem;
