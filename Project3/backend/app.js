var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var testRouter = require('./routes/test');
var sign_upRouter = require('./routes/sign_up');
var loginRouter = require('./routes/login');
var homeRouter = require('./routes/home');
var shopRouter = require('./routes/shop');
var detailRouter = require('./routes/detail');
var comunityRouter = require('./routes/comunity');
var mypageRouter = require('./routes/mypage');
var basketRouter = require('./routes/basket');
var adminRouter = require('./routes/admin');

var app = express();

app.use(require('connect-history-api-fallback')());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/test', testRouter);
app.use('/sign_up',sign_upRouter);
app.use('/login', loginRouter);
app.use('/home', homeRouter);
app.use('/shop', shopRouter);
app.use('/detail', detailRouter);
app.use('/comunity', comunityRouter);
app.use('/mypage', mypageRouter);
app.use('/basket', basketRouter);
app.use('/admin', adminRouter);


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
