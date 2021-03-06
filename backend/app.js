const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

require('dotenv').config();


const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes);

app.use('/images', express.static('images'));

module.exports = app;