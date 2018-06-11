var connection = require("./connection.js");

var orm = {
  selectAll: function(tableName, callback) {
    var queryString = "SELECT * FROM ?? ORDER BY id";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: function(tableName, burger_name, devoured) {
    // ["Chilli Burger", true].join(", ")
    // "Chilli Burger", true
    var queryString = "INSERT INTO ?? SET ?";

    connection.query(queryString, [tableName, { burger_name, devoured }], function (err, result) {
      if (err) throw err;
      return result;
    });
  },
  
  updateOne: function(tableName, colName, value, id) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";

    connection.query(queryString, [tableName, colName, value, id], function (err, result) {
      if (err) throw err;
      return result;
    });
  }
};

module.exports = orm;