const db = require('../data/dbConfig');

module.exports = {
	find,
	add
};

function find() {
	return db('users');
}

function add(body) {
	return db('users').insert(body, 'id');
}
