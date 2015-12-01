var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Todo = mongoose.model('Todo', {
    task: {
        type: String,
        required: true
    }
});



router.get("/", function(req, res) {
    Todo.find(function(err, arrayOfItems) {
        res.render("index", {
            item: arrayOfItems
        })
    })
});


module.exports = router;