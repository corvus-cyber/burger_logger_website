const orm = require("../config/orm.js")

let burgerInput= {
    selectAll: function(cb){
        orm.selectAll("burgers",(results) =>{
           cb(results) 
        })
    },
    // InsertOne: function(cb){

    // }
    // updateOne: function(cb){

    // }
}

module.exports = burgerInput;