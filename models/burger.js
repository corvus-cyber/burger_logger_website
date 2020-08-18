var orm = require("../config/orm.js")



let burgerInput= {
    select: function(callback){
        orm.selectAll("burgers",(results) =>{
           callback(results) 
        })
    },
    insert: function(cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, function(res) {
          callback(res);
        });
    },
    update: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
          callback(res);
        });
    },
}

module.exports = burgerInput;