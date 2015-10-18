var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/html/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/bc', express.static(__dirname + '/client/bower_components'));


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
