const http = require('http');
const express = require('express');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(router);

io.on('connection', (socket) => {
  console.log('We have a connection');

  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);

    const error = true;

    if (error) {
      callback({ error: 'error' });
    }
  });

  socket.on('disconnect', () => {
    console.log('User had left');
  });
});

server.listen(PORT, () => console.log(`Server has started at port ${PORT}`));
