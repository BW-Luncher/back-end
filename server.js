const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const db = require('./data/dbConfig');

server.use(helmet());
server.use(cors());
server.use(morgan());
server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ message: 'hello world' });
});

server.post('/', (req, res) => {
	db('users')
		.insert(req.body)
		.then(response => {
			res.status(200).json(req.body);
		})
		.catch(response => {
			res.status(500).json({ message: 'err' });
		});
});

module.exports = server;
