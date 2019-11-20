const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const Users = require('./auth-model');

router.post('/register', (req, res) => {
	let user = req.body;

	const hash = bcrypt.hashSync(user.password, 12);

	user.password = hash;

	Users.add(user)
		.then(response => {
			res.status(201).json({ message: 'successfully registered' });
		})
		.catch(response => {
			res.status(500).json({ message: 'error when registering' });
		});
});

router.post('/login', (req, res) => {
	let { username, password } = req.body;

	Users.find({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = getJwtToken(user.username, user.password, user.role);

				res.status(200).json({ token, message: `Welcome ${user.username}` });
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

function getJwtToken(username, password, role) {
	const payload = {
		username,
		password,
		role
	};

	const secret = process.env.JWT_SECRET || 'is it secret, is it safe?';

	const options = {
		expiresIn: '5d'
	};

	return jwt.sign(payload, secret, options);
}

module.exports = router;
