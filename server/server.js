const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');

var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app)
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected.');

    socket.emit('newMessage', {
        from: 'mike@example.com',
        text: 'Hey. What is going on.',
        createAt: 123456
    });

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected.');
    });
});

/*
app.get('/', (req, res, next) => {
  res.status(200).sendFile('index.html', (err) => {
      if (err) next(err);
  });
});
*/

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});