var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var robots = require('express-robots')

var routes = require('./routes/index');
var users = require('./routes/users');
var about = require('./routes/about');
var contact = require('./routes/contact');
var CTF = require('./routes/CTF');
var join = require('./routes/join');


var app = express(); 

// view engine setup
//app.use(robots(__dirname + '/robots.txt'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname,'public/images/logo.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

    /* app.use(helmet.contentSecurityPolicy({
        directives: {
        'defaultSrc': ["'none'"],
        'baseUri' : [`'none'`],
        'scriptSrc': [`'self'`,'https://code.jquery.com:443', 'https://cdnjs.cloudflare.com:443', 'https://maxcdn.bootstrapcdn.com:443', 'https://maps.googleapis.com:443','https://www.googletagmanager.com/gtag '],
        'styleSrc': [`'self'`,'https://maxcdn.bootstrapcdn.com:443'],
        'imgSrc': [`'self'`,'https://scontent.xx.fbcdn.net:443'],
        'fontSrc': [`'none'`],
        'objectSrc': [`'none'`],
        'blockAllMixedContent': false
        }
    })); */

app.use(helmet({

    frameguard:{action: 'deny'}

}));

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/', routes);
app.use('/about', about);
app.use('/users', users);
app.use('/contact', contact);
app.use('/CTF', CTF);
app.use('/join', join);

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
  }

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
