var mysql = require("mysql");

//This will connect to the database found within mySQL
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "20Coding!20",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Exporting the connection function to orm.js, where it will call upon the database
module.exports = connection;
