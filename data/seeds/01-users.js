exports.seed = function(knex) {
	return knex('users').insert([
		{ username: 'user1', password: '123', role: 'admin' },
		{ username: 'user2', password: '123', role: 'admin' },
		{ username: 'user3', password: '123', role: 'patron' }
	]);
};
