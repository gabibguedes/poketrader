const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const {
  PORT,
  DB_USER,
  DB_PASS,
  DB_NAME,
  DB_HOST,
  NODE_ENV
} = process.env;

const url = `mongodb${NODE_ENV === 'production'? '+srv' : ''}://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.error('Error on connecting to MongoDB', err);
  })

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
