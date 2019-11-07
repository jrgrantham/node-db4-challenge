const express = require('express')
const helmet = require('helmet')

const db = require('./data/db-config.js')

const menuRouter = require('./data/routers/menu-router')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('Server running');
});

server.use('/api/menu', menuRouter);

module.exports = server