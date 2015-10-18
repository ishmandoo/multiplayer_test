var socket = io();



socket.on('friendButton', function () {
  console.log("friendButton");
  $( "#notifications" ).append( "<p>Friend</p>" );
})

var buttonPress = function() {
  console.log("button");
  socket.emit('button');
}
