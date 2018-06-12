var mysql = require("mysql");

var connection;

// Extract environment variables
const {
  JAWSDB_URL,
  NODE_ENV
} = process.env;

if (NODE_ENV === "production") {
  connection = mysql.createConnection(JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
  console.log("listening on 3306")
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;