const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	update,
	// findById,
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
	return db('schools')
		.insert(item, 'id')
		.then(ids => {
			const [id] = ids;
			return find(id);
		});
}


// function findById(id){
//     return db('schools')
//     .where({id})
//     .first()
// }

// function update(changes,id) {
//     return db('schools')
//     .where({id: id})
// 	.update(changes, 'id')
//     .then(()=> findById(id))
// }


function update(body,id){
	return db('schools')
	.where({id})
	.update(body ,'id')
	.then(ids => {
		// console.log(ids
		const [id] = ids;
		return find(id);
	})
}

function remove(id){
    return db('schemes')
    .del()
    .where({id})
}