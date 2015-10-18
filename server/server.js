var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile('client/html/index.html' , { root : "."});
});

app.use('/js', express.static('client/js' , { root : "."}));
app.use('/bc', express.static('client/bower_components' , { root : "."}));


io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('button', function (data) {
    socket.broadcast.emit('friendButton', {});
  });
});

var server = http.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
