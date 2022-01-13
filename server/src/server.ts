require('dotenv').config();

import path from 'path';
import express from 'express';
import cors from 'cors';

// Socket.io creation and connection
const io = require('socket.io')(process.env.SOCKET_PORT, {
  cors: {
    // origin: [
    //   `http://localhost:${process.env.SOCKET_PORT}`,
    //   `http://localhost:${process.env.SERVER_PORT}`,
    //   'http://localhost',
    //   'http://localhost:3000',
    // ],
    origin: '*',
  },
});

import { connectMangoDB } from './config/mangodb.config';
connectMangoDB();

import Document from './schemas/Document';

export const findOrCreate = async (id) => {
  if (id == null) return;

  const document = await Document.findById(id);

  if (document) return document;

  return Document.create({
    _id: id,
    data: {},
    documentName: 'Document Name',
    users: [],
    creationDate: new Date(),
    lastModificationDate: new Date(),
  });
};

const rooms = io.of('/').adapter.rooms;
const sids = io.of('/').adapter.sids;

// when we receive a connection from a quill instance
io.on('connection', (socket) => {
  socket.on('get-document', async (docId: string, userId: string) => {
    const document = await findOrCreate(docId);
    socket.join(docId);
    socket.emit('load-document', document.data, document.documentName);

    console.log(`${userId} connected to ${docId}`);
    console.log(`${rooms.get(docId).size} persons are connected on ${docId}`);

    // when we receive the changes from a document
    socket.on('send-changes', (delta) => {
      socket.broadcast.to(docId).emit('receive-changes', delta);
    });

    socket.on('save-document', async (data) => {
      await Document.findByIdAndUpdate(docId, {
        data: data,
        lastModificationDate: Date.now(),
      });
    });

    socket.on('disconnecting', () => {
      console.log(docId, userId);
    });

    socket.on('disconnect', () => {
      let personInTheRoom = 0;
      if (rooms.has(rooms.get(docId))) {
        personInTheRoom = rooms.get(docId).size;
      }

      console.log(`${personInTheRoom} persons are connected on ${docId}`);
    });
  });
});

import { apiRouter } from './routes/api.route';

const app = express();
app.use(
  cors({
    origin: [
      `http://localhost:${process.env.SOCKET_PORT}`,
      `http://localhost:${process.env.SERVER_PORT}`,
      'http://localhost',
      'http://localhost:3000',
    ],
  })
);

app.use('/api', apiRouter);

// app.use('/', express.static(path.join(__dirname, './dist')));
// app.get('*', (req, res) => {
//   res.sendFile('index.html', {
//     root: path.join(__dirname, './dist'),
//   });
// });

app.listen(process.env.SERVER_PORT, () => {
  const PORT = process.env.SERVER_PORT;
  console.log(`The server is listening on http://localhost:${PORT}`);
});
