var bodyParser = require("body-parser");
var express = require("express");
var methodOverride = require("method-override");
require('dotenv').config();

var PORT = process.env.PORT || 8080;
console.log("listening on 8080")

var app = express();

//added to definen db
var db = require("./models/index.js");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// allows our app to use a public folder
app.use(express.static(__dirname + '/public'));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controllers.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({}).then(function () {
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
