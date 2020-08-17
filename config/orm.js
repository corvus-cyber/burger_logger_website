const connection = require("./connection.js");

// Object for all our SQL statement functions.
let orm = {
    selectAll: function(tableInput, cb){
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (error, result) => {
            if (error){
            throw error};
            cb(result);
        })
    },
    insertOne: function(){

    },
    updateOne: function(){

    }
}

module.exports= orm;