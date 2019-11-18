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

// function add(item){
//     return db('users')
//     .insert(item, "id")
//     .then(ids => {
//         const [id] =ids;
//         return find(id)
//     })
// }

function findbyId(id) {
	return db('users')
	.where({id})
	first()
}
