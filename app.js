require('dotenv').config();
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('./middleware/db_middleware');
var protectedRouteMiddleware =  require('./middleware/route_middleware');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var orderRouter = require('./routes/order');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', indexRouter);
app.use('/Login',loginRouter);


app.use('/orderData',orderRouter);
app.use(protectedRouteMiddleware.protecteroutes);



app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
