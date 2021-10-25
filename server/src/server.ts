const express = require('express');
const io = require('socket.io')(3001, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
const mongoose = require('mongoose');
import MongoDocument from './schemas/MongoDocument';

const uri = 'mongodb+srv://dbRayan:1402@cluster0.utyhq.mongodb.net/test';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

export const findOrCreate = async (id) => {
  if (id == null) return;
  const document = await MongoDocument.findById(id);
  if (document) return document;
  return MongoDocument.create({ _id: id, data: '' });
};

// when we receive a connection from a quill instance
io.on('connection', (socket) => {
  socket.on('get-document', async (docId) => {
    const document = await findOrCreate(docId);
    socket.join(docId);
    socket.emit('load-document', document.data);

    // when we receive the changes from a
    socket.on('send-changes', (delta) => {
      socket.broadcast.to(docId).emit('receive-changes', delta);
    });

    socket.on('save-document', async (data) => {
      await MongoDocument.findByIdAndUpdate(docId, { data });
    });
  });
});

const app = express();
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
