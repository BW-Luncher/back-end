const db = require('../data/dbConfig');

module.exports = {
	find,
	add,
	findbyId
};

function find(username) {
	return db('users').where(username);
}

function add(body) {
	return db('users').insert(body, 'id');
}


function findbyId(id) {
	return db('users').where({ id });
	first();
}
