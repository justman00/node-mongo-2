require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const oneToOneRouter = require('./one-to-one/router');
const oneToManyRouter = require('./one-to-many/router');
const manyToManyRouter = require('./many-to-many/router');
// Configuram si ne conectam la mongoDB
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@stepit-cluster.cbszf.mongodb.net/lectureNodeMongo2?retryWrites=true&w=majority`
);

const server = express();

server.use(express.json());
// one-to-one
server.use('/one-to-one', oneToOneRouter);
server.use('/one-to-many', oneToManyRouter);
server.use('/many-to-many', manyToManyRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>MongoDB 2</h2>
  `);
});

module.exports = server;
