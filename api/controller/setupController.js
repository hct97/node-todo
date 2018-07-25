var Todos = require("../models/todoModel");

module.exports = function(app){
    app.get("/api/setupTodos",function(req,res){

        var seedTodos = [
            {
                text: "Hoc Node.js",
                isDone: false
            },
            {
                text: "Hoc AngularJS",
                isDone: false
            },
            {
                text: "Viet ung dung hoan chinh",
                isDone: false
            }
        ];

        Todos.create(seedTodos, function(err,results){
            res.send(results);
        });
    });
};