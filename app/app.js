var express = require('express');
var cors = require('cors')
var path = require('path');
var config = require('config');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

let HttpError = require('http-errors');

// require Mongoose schemas
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('./models');

mongoose.connect(config.get('mongodb.hostname'), { useMongoClient: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var routes = require('./routes');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, '../public/views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../client/public')));

app.use(cors());

app.use('/', routes);

// catch 404
app.use(function (req, res, next) {
  let response = { error: { code: 404, message: 'Not Found' } };
  res.status(404);
  res.send(response);
});

// error handler
app.use(function (err, req, res, next) {
  for (code in HttpError) {
    if (err instanceof HttpError[code]) {
      let response = { error: { code: err.statusCode, message: err.message } };
      res.status(code);
      res.send(response);
      return;
    }
  }

  next(err);
});

app.use(function (err, req, res, next) {
  let response = { error: { code: 500, message: 'Internal Server Error' } };
  res.status(500);
  res.send(response);
  console.log(err);
});

module.exports = app;
