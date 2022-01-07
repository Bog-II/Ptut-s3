require('dotenv').config();

const path = require('path');
const express = require('express');

// Socket.io creation and connection
const io = require('socket.io')(process.env.SOCKET_PORT, {
  cors: {
    origin: [
      `http://localhost:${process.env.SERVER_PORT}`,
      'http://localhost',
      'http://localhost:3000',
    ],
    methods: ['GET', 'POST'],
  },
});

import { doc } from 'prettier';
import { connectMangoDB } from './config/mangodb.config';
connectMangoDB();

import MongoDocument from './schemas/MongoDocument';

export const findOrCreate = async (id) => {
  if (id == null) return;
  const document = await MongoDocument.findById(id);
  if (document) return document;
  return MongoDocument.create({ _id: id, data: '' });
};

const rooms = io.of('/').adapter.rooms;
const sids = io.of('/').adapter.sids;

// when we receive a connection from a quill instance
io.on('connection', (socket) => {
  socket.on('get-document', async (docId: string, data: string) => {
    const document = await findOrCreate(docId);
    socket.join(docId);
    socket.emit('load-document', document.data);

    // when we receive the changes from a document
    socket.on('send-changes', (delta) => {
      socket.broadcast.to(docId).emit('receive-changes', delta);
    });

    socket.on('save-document', async (data) => {
      await MongoDocument.findByIdAndUpdate(docId, { data });
    });

    socket.on('disconnecting', () => {
      console.log(docId, data);
    });
  });
});

const app = express();

app.use(
  '/assets',
  express.static(path.join(__dirname, '../../client/dist/assets'))
);

app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../client/dist'),
  });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}`);
});
