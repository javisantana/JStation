var sio    = require('socket.io')
  , express= require('express')
  , app    = express.createServer();
  

// configure express server
app.configure(function(){
  app.use(express.logger());  // enables logging to stdout
  app.use(express.static(__dirname + '/public')); // configures static file serving from /public
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});  

// root, er, route
app.get('/', function(req, res){
});

// set http server listening on a nice port
app.listen(8080, function () {
  var addr = app.address();
  console.log('   app listening on http://' + addr.address + ':' + addr.port);
});


var io         = sio.listen(app);
var master = null;
var players = {}
io.sockets.on('connection', function (socket) {
  socket.on('master', function() {
    master = socket;
  });
  socket.on('new_player', function (name) {
    console.log("NEW PLAYER!" + name);
    if(master !== null) {
        master.emit('new_player', name);
        players[name] = socket;
    }
  });
  socket.on('update_controller', function (touch) {
    console.log(JSON.stringify(touch));
    if(master !== null) {
        //socket.volatile.broadcast.emit('touch', touch);
        master.emit('update_controller', touch);
    }
  });
});
