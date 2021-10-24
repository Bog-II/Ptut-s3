import express from 'express';
import socketio from 'socket.io'

const io = socketio(3001,{
  cors:{
    origin: 'http://localhost:3000',
    methods: ['GET','POST']
  }
})

io.on("connection", socket => {

})

const app = express();
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
