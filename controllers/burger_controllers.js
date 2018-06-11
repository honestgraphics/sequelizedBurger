var express = require("express");

var burgerMod = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req,res) {
  burgerMod.burgers(function(resultsFromDB){
    console.log("This is the results from DB.",resultsFromDB);
    res.render("index", {burgerData: resultsFromDB});
  });

})

router.post("/createBurger", function(req,res) {
  burgerMod.insertedBurger(req.body.burgerName);
  res.redirect("/");
})

router.put("/:id", function(req, res) {
  var { id } = req.params;
  const { devoured } = req.body;
  burgerMod.updatedBurger(devoured, id);
  res.redirect("/");
})

module.exports = router;