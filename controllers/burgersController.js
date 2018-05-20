var express = require("express");

// Import the model (burger.js) to use its database functions.
var burgers = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res){
    burgers.all(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });    
});

router.post("/api/burgers", function(req, res) {
    console.log(req);
    burgers.create(
      req.body.name
    , function(result) {
      // Send back the ID of the new quote
      console.log(res.json(result));
      res.end();
    });
});

router.put("/api/burgers/:id", function(req,res){
    var id = req.params.id;
    var devoured = req.body.devoured;
    console.log("dev = " + devoured);
    console.log("id = ", id);

    burgers.update(devoured, id, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
});

// Export routes for server.js to use.
module.exports = router;


  