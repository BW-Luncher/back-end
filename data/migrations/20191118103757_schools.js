exports.up = function(knex) {
	return knex.schema.createTable('schools', tbl => {
		tbl.increments();
		tbl.text('school').notNullable();
		tbl.text('school_insignia');
		tbl.text('address').notNullable();
		tbl.text('email');
		tbl.integer('funds_needed').notNullable();
		tbl.integer('funds_given');
		tbl.integer('goal').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('schools');
};
