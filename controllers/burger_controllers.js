var express = require("express");

var {
  Burgers
} = require("../models");
var router = express.Router();

router.get("/", function (req, res) {
  Burgers.findAll().then(burgerData => res.render("index", {
    burgerData
  }));
})

router.post("/createBurger", function (req, res) {
  Burgers.create({ burger_name: req.body.burgerName }).then(() => {
    res.status(201).end()
  })
})

router.put("/:id", function (req, res) {
  var {
    id
  } = req.params;

  Burgers.findById(id).then((burger) => {
    burger.update({ devoured: 1 })
    res.status(200).end();
  });
})

module.exports = router;