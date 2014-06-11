var cors = require('cors');
var express = require('express');
var http = require('http');
var multipart = require('connect-multiparty');
var path = require('path');
var socketIo = require('socket.io');

var ClientMessage = require('./components/socket').ClientMessage;
var Socket = require('./components/socket');

var config = require('./config');
var routes = require('./routes');
var sockets = require('./sockets');

var multipartMiddleware = multipart();

var app = express();
var server = http.createServer(app);

app.set('env', config.env);
app.use(require('compression')());
app.enable('case sensitive routing');
app.use(require('morgan')('tiny'));
app.use(require('method-override')());
app.use(require('body-parser')());
app.use(require('cookie-parser')('flksjf;jsE76_2ff'));
app.use(require('cookie-session')({
  secret: 'mwrY2fns'
}));
app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
app.use(cors({
  origin: function(origin, callback) {
    callback(null, true);
  }
}));
app.use(express.static(config.webPath));

var io = socketIo.listen(server, {
  'browser client gzip': true,
  'log level': 3
});

var socketHandlers = {};
socketHandlers[ClientMessage.ACTIVITY_END]          = sockets.common.activityEnd;
socketHandlers[ClientMessage.ACTIVITY_START]        = sockets.common.activityStart;
socketHandlers[ClientMessage.CALL_ACCEPT]           = sockets.calls.accept;
socketHandlers[ClientMessage.CALL_CANCEL]           = sockets.calls.cancel;
socketHandlers[ClientMessage.CALL_ESCAPE]           = sockets.calls.escape;
socketHandlers[ClientMessage.CALL_MESSAGE]          = sockets.calls.message;
socketHandlers[ClientMessage.CALL_REJECT]           = sockets.calls.reject;
socketHandlers[ClientMessage.CALL_STOP]             = sockets.calls.stop;
socketHandlers[ClientMessage.CALL_TYPING_FINISH]    = sockets.calls.typingFinish;
socketHandlers[ClientMessage.CALL_TYPING_START]     = sockets.calls.typingStart;
socketHandlers[ClientMessage.CONTACT_MESSAGE]       = sockets.contacts.message;
socketHandlers[ClientMessage.CONTACT_MESSAGE_READ]  = sockets.contacts.messageRead;
socketHandlers[ClientMessage.CONTACT_TYPING_FINISH] = sockets.contacts.typingFinish;
socketHandlers[ClientMessage.CONTACT_TYPING_START]  = sockets.contacts.typingStart;
socketHandlers[ClientMessage.NOTIFICATION_READ]     = sockets.common.notificationRead;

var socketServer = new Socket(io);
app.set('socketIo', io.sockets);
app.set('socketServer', socketServer);

io.sockets.on('connection', function(socket) {
  for (var key in socketHandlers) {
    socket.on(key, function() {
      var args = [app, socket].concat(Array.prototype.slice.call(arguments));
      socketHandlers[key].apply(null, args);
    });
  }
});

app.param(function(name, fn) {
  if (fn instanceof RegExp) {
    return function(req, res, next, val) {
      var captures = fn.exec(String(val));

      if (captures) {
        req.params[name] = captures;
        next();
      } else {
        next('route');
      }
    }
  }
});

app.param('callId', /^\d+$/);
app.param('photoId', /^\d+$/);
app.param('photoToken', /^[\dA-Za-z_\-]+$/);
app.param('pointId', /^\d+$/);
app.param('token', /^[0-9a-zA-Z]+$/);
app.param('userId', /^\d+$/);

app.get('/v201405/geo', routes.geo.getLocations);
app.get('/v201405/geo/find', routes.geo.findLocations);

app.get('/v201405/me', routes.me.get);
app.put('/v201405/me/filter', routes.me.updateFilter);

app.get('/v201405/points', routes.points.getList);
app.get('/v201405/points/:pointId/like', routes.points.like);
app.get('/v201405/points/:pointId/unlike', routes.points.unlike);

app.get('/v201405/settings', routes.settings.get);

app.post('/v201405/signin', routes.auth.signin);
app.post('/v201405/signup', routes.auth.signup);

app.get('/v201405/users', routes.users.getList);




app.get('/developer/settings', routes.developer.options);
app.post('/developer/settings/option', routes.developer.setOption);
app.post('/developer/send', routes.developer.setMessage);

app.get('/apps/developer', routes.developer.app);

app.get('/images/avatar/high/:photoToken', routes.developer.getHighAvatar);
app.get('/images/avatar/square/:photoToken', routes.developer.getSquareAvatar);
app.get('/images/photo/:photoToken', routes.developer.getPhoto);

app.get('/panel', routes.pages.panel);

app.use(routes.pages.error);

server.listen(config.port, config.ip, function() {
  console.log(
    "HighPoint Test Server listening on " + config.ip + ':' + config.port);
});
