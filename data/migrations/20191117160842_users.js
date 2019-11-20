exports.up = function(knex) {
	return knex.schema.createTable('users', tbl => {
		tbl.increments();
		tbl.string('username').notNullable();
		tbl.string('password').notNullable();
		tbl.text('role');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('users');
};
