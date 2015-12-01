//_______________________________________________________________BEGIN setup
var bcrypt = require("bcryptjs");
var express = require('express');
var path = require('path');
var http = require('http');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var session = require('client-sessions');
var expressHbs = require('express-handlebars');

//_______________________________________________________________BEGIN routes
var routes = require('./routes/index');
app.use('/', routes);


//_______________________________________________________________END routes
app.engine('hbs', expressHbs({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({

    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect('mongodb://localhost/app');


//_______________________________________________________________END setup



// app code



//_______________________________________________________________BEGIN Start server

app.listen("3000", function(err) {

    if (err) {
        console.log("server is not working");
    } else {
        console.log("Server is working on 3000");
    }
})
//_______________________________________________________________END Start server