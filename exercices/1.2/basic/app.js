var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let counter = [{path : req.path + req.method},{counter : 0}];
var indexRouter = require('./routes/index');
var usersRouters = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
  

app.use('/', indexRouter);
app.use('/users', usersRouters);

module.exports = app;
