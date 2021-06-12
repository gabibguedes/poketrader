const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const {
  PORT,
  DB_USER,
  DB_PASS,
  DB_NAME,
  DB_HOST
} = process.env;

const url = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.error('Error on connecting to MongoDB', err);
  })

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
