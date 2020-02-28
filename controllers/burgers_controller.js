const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.all((data) => {
    const burgersObject = {
      burgers: data
    }
    res.render("index", burgersObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name", "devoured"], [req.body.name, req.body.devoured], (result) => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = `id = ${req.params.id}`;
  burger.update(
    { devoured: req.body.devoured },
    condition,
    (result) => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete("/api/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;
  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
