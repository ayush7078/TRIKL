const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemsRouter = require('./routes/items');
const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb://127.0.0.1:27017/items';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

app.use(bodyParser.json());
app.use('/', itemsRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
