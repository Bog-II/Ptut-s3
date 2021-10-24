const express = require('express');
const io = require('socket.io')(3001, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// when we receive a connection from a quill instance
io.on('connection', (socket) => {
  socket.on('get-document', (docId) => {
    const data = '';
    socket.join(docId);
    socket.emit('load-document', data);

    // when we receive the changes from a
    socket.on('send-changes', (delta) => {
      socket.broadcast.to(docId).emit('receive-changes', delta);
    });
  });

  console.log('connected');
});

const app = express();
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
