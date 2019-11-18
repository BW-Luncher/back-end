exports.seed = function(knex) {
	return knex('schools').insert([
		{
			school: 'George Washington Highschool',
			school_insignia:
				'https://images.unsplash.com/photo-1566673242574-eddd38f7277f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			address: '123 George Ave',
			email: 'GW@gmail.com',
			funds_needed: 5000,
			funds_given: 2000,
			goal: 7000
		},
		{
			school: 'George Washington Highschool',
			school_insignia:
				'https://images.unsplash.com/photo-1566673242574-eddd38f7277f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			address: '123 George Ave',
			email: 'GW@gmail.com',
			funds_needed: 5000,
			funds_given: 2000,
			goal: 7000
		},
		{
			school: 'George Washington Highschool',
			school_insignia:
				'https://images.unsplash.com/photo-1566673242574-eddd38f7277f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			address: '123 George Ave',
			email: 'GW@gmail.com',
			funds_needed: 5000,
			funds_given: 2000,
			goal: 7000
		}
	]);
};
