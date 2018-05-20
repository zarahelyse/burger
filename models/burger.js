
// Import the ORM to create functions that will interact with the database.
var burgers_orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        burgers_orm.selectAll(function(res){
            cb(res);
        });
    },
    create: function(vals, cb){
        burgers_orm.insertOne(vals, function(res){
            cb(res);
        });
    },
    update: function(devouredVal, id, cb){
        burgers_orm.updateOne(devouredVal, id, function(res){
            cb(res);
        });
    }
};

// Export the database functions for the controller
module.exports = burger;