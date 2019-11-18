const db = require('../data/dbConfig');

module.exports = {
	find,
	add,
	findbyId,
	
	


};

function find() {
	return db('users');
}

function add(body) {
	return db('users')
	.insert(body, 'id');
}


function findbyId(id) {
	return db('users')
	.where({id})
	first()
}
