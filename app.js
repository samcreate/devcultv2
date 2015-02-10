/**
 * Module dependencies.
 */

var express  = require('express'),
    path     = require('path'),
    config   = require('./config'),
    routes   = require('./routes'),
    winston  = require('winston');


var app = express();

app.locals({
  dev: app.get('env') === 'development',
  pretty: config.htmlPretty
});



/**
 * Express configuration.
 */
app.set('port', config.server.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.compress());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res) {
  res.status(404).render('404', {title: 'Not Found :('});
});
app.use(express.errorHandler());

routes(app);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
