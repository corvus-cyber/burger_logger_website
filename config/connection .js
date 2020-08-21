var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{ 
  connection= mysql.createConnection({
  host: "localhost",
  port: 3306,
  username: "root",
  password: "20Coding!20",
  database: "burgers_db"
  });
};

connection.connect();

module.exports = connection;