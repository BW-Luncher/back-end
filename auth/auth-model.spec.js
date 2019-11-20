const db = require('../data/dbConfig');

const { find, add } = require('./auth-model');

describe('auth model functions', () => {
	describe('find', () => {
		beforeEach(async () => {
			await db('users').truncate();
			await add({ username: 'test', password: '12' });
			await add({ username: 'test2', password: '123' });
		});
		it('finds user from DB', async () => {
			let user = await db('users');

			find(user[0])
				.first()
				.then(response => {
					expect(response.username).toBe('test');
				});
			find(user[1])
				.first()
				.then(response => {
					expect(response.username).toBe('test2');
					expect(response.password).toBe('123');
				});
		});
	});

	describe('add', () => {
		beforeEach(async () => {
			await db('users').truncate();
		});

		it('should add a user to the DB', async () => {
			await add({ username: 'test', password: '12' });
			await add({ username: 'test2', password: '123' });

			let user = await db('users');

			expect(user[0].username).toBe('test');
			expect(user[0].password).toBe('12');
			expect(user[1].username).toBe('test2');
			expect(user[1].password).toBe('123');
		});
	});
});
