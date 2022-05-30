const mongoose = require('mongoose');
require('dotenv').config()

const dbConnect = () => {
  const URI = process.env.MONGODB_URL;
  
  const options = {
    useNewUrlParser: true,
    autoIndex: false,
    useUnifiedTopology: true,
  };
  
  mongoose.connect(URI, options);

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Database is no longer accessible'));
  db.once('open', function () {
    console.log('CONNECTED MONGO DB');
  });
}

module.exports = dbConnect;

