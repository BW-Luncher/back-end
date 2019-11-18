const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authRouter = require('./auth/auth-router');
const schoolRouter = require('./school/school-router');
const authenticate = require('./auth/restricted-middleware');

server.use(helmet());
server.use(cors());
server.use(morgan());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/schools', authenticate, schoolRouter);

// server.get('/', (req, res) => {
// 	res.status(200).json({ message: 'hello world' });
// });

module.exports = server;
