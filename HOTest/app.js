var createError = require('http-errors');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var express = require('express');
var app = express();

var mongoose = require('./mongo.js');
mongoose();

var cors = require('cors');
app.use(cors({
	origin: true,
	credential: true	
}));

var session = require('express-session');
app.use(
	session({
		key: "loginData",
    // need to blind
		secret: "secretSample",
		resave: false,
		saveUninitialized: false,
		cookie: {
			express: 60 * 60 * 24
		}
	})
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var commonRouter = require('./routes/common');
app.use('/', commonRouter);
var userRouter = require('./routes/api/user');
app.use('/user', userRouter);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
