var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var robots = require('express-robots')
var routes = require('./routes/index');
var about = require('./routes/about');
var contact = require('./routes/contact');
var CTF = require('./routes/CTF');
var join = require('./routes/join');
var redirect = require('./routes/redirect');
var sponsor = require('./routes/sponsor');
var secrets = require('./routes/secrets');

// Presentations
var reverse = require('./routes/workshops/freshers/reverse.js');
var magicnumber_linux = require('./routes/workshops/freshers/magicnumber_linux.js');
var magicnumber_win = require('./routes/workshops/freshers/magicnumber_win.js');
var magicnumber_osx = require('./routes/workshops/freshers/magicnumber_osx.js');

// External
var cma = require('./routes/external/cma');
var ida_pro = require('./routes/external/ida_pro');

// Easter egg
var filestore = require('./routes/filestore');
var filestore_files = require('./routes/filestore_files');
var downloader = require('./routes/downloader');
var qr_code = require('./routes/qr_code');


var app = express();

// view engine setup
app.use(robots(__dirname + '/robots.txt'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname,'public/images/logo.png')));
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
app.use('/files/stylesheets', express.static(__dirname + '/public/stylesheets')); // redirect CSS bootstrap
app.use('/files/images', express.static(__dirname + '/public/images'))
app.use('/files/javascripts', express.static(__dirname + '/public/javascripts'))
app.use('/files/fonts', express.static(__dirname + '/public/fonts'))
app.use('/', routes);
// Core pages
app.use('/about', about);
app.use('/contact', contact);
app.use('/CTF', CTF);
app.use('/join', join);
app.use('/redirect', redirect);
app.use('/secrets', secrets);
// Sponsors
app.use('/sponsors/accenture', sponsor);
// Workshops
app.use('/freshers/reverse', reverse);
app.use('/freshers/reverse/magicnumber', magicnumber_linux);
app.use('/freshers/reverse/magicnumber.exe', magicnumber_win);
app.use('/freshers/reverse/magicnumber.osx', magicnumber_osx);
// External resources
app.use('/external/cma', cma);
app.use('/external/ida_pro', ida_pro);
// Easter eggs
app.use('/secrets/Sup3r-secr3t_CyBers0c_f1le5tor3', filestore);
app.use('/secrets/Sup3r-secr3t_CyBers0c_f1le5tor3/request', filestore_files);
app.use('/secrets/Sup3r-secr3t_CyBers0c_f1le5tor3/downloader', downloader);
app.use('/secrets/qR_c0d3-d40c20deae3f45bc63fba4ae980a3716', qr_code);

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
        message: "",
        error: ""
    });
});


module.exports = app;
