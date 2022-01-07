require('dotenv').config();

function connectMangoDB() {
  const mongoose = require('mongoose');
  const uri = process.env.MANGO_URI;

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
  });
}

export { connectMangoDB };
