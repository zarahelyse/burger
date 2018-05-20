// Import MySQL connection.
var connection = require("../config/connection.js");

var burgers_orm = {
    selectAll: function(callback){
        var query = "SELECT * FROM burgers";
        connection.query(query, function(err, result){
            if(err){
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function(vals, callback){
        var query = "INSERT INTO burgers(burger_name, devoured)";
        query += " VALUES ('" + vals + "',0)";

        console.log(query);

        connection.query(query, vals, function(err, result) {
            if (err) {
              throw err;
            }      
            callback(result);
          });
    },
    updateOne: function(devouredVal, id, callback){
        var query = "UPDATE burgers SET devoured = ";
        query += devouredVal;
        query += " WHERE id = " + id;

        console.log(query);

        connection.query(query, function(err, result) {
            if (err) {
              throw err;
            }      
            callback(result);
          });

    }
};


// Export the orm object for the burgers model 
module.exports = burgers_orm;