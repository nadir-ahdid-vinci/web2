var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let counter = [0,0,0,0];
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    if(req.method === "GET" && req.path === "/"){
        counter[0]++;
    }
    if(req.method === "GET" && req.path === "/pizzas"){
        counter[1]++;
    }
    if(req.method === "POST" && req.path === "/pizzas"){
        counter[2]++;
    }
    if(req.method === "DELETE" && req.path === "/pizzas"){
        counter[3]++;
    }

    console.log("Request counter : ");
    console.log("- GET / : " + counter[0]);
    console.log("- GET /pizzas : " + counter[1]);
    console.log("- POST /pizzas : " + counter[2]);
    console.log("- DELETE /pizzas : " + counter[3]);
    next();
  });
  

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
