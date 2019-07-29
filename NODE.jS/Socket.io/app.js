var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.emit('some event', { for: 'everyone' });

io.on('connection', function (socket) {

  console.log('a user connected');
  
  // wyemituje dla wszystkich ale ie dla samego niego



  socket.broadcast.emit('new user', 'Przyszedł gość')

  socket.on('disconnect', function () {
    console.log('user disconnected');
    io.emit('user out', 'Gość opuścił czat')
  });

  // wysyanie do wszystkich
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
const  =, ) => {
 retur + ;
}