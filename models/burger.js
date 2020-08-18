var orm = require("../config/orm.js")



let burgerInput= {
    select: function(cb){
        orm.selectAll("burgers",(results) =>{
           cb(results) 
        })
    },
    insert: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
          cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
          cb(res);
        });
    },
}

module.exports = burgerInput;