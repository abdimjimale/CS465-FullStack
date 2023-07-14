const express = require('express');
const path = require('path');
const indexRouter = require('./app_server/routes/index');
const travelRouter = require('./app_server/routes/travel');
const createError = require('http-errors');
const logger = require('morgan');
const fs = require('fs')
const hbs = require('hbs')

const app = express();
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// view engine setup
app.set('views', path.join(__dirname, "app_server", 'views'));
app.set('view engine', 'hbs');

// Register partials
hbs.registerPartials(path.join(__dirname, "app_server" ,  "views", "partials"))


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/travel', travelRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
