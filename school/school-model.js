const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy
};

function find(id) {
	if (id) {
		return db('schools')
			.where({ id })
			.first();
	} else {
		return db('schools');
	}
}

function findBy(body) {
	return db('users').where(body);
}

function add(item) {
	return db('users')
		.insert(item, 'id')
		.then(ids => {
			const [id] = ids;
			return find(id);
		});
}
