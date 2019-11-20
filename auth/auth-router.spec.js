const request = require('supertest');

const server = require('../server');
const db = require('../data/dbConfig');
const { add } = require('./auth-model');

it('should set db environment to test', function() {
	expect(process.env.DB_ENV).toBe('testing');
});

// describe('server', function() {
// 	describe('GET /api/schools', function() {
// 		it('should return current list of schools', function() {
// 			return request(server)
// 				.get('/api/schools')
// 				.expect(200);
// 		});
// 	});
// });

describe('auth route', () => {
	describe('register', () => {
		it('should register a user', async () => {
			const user = await request(server)
				.post('/api/auth/register')
				.send({ username: 'testing', password: '123' });

			expect(user.body.message).toBe('successfully registered');
			expect(user.status).toBe(201);
			expect(user.status).not.toBe(404);
		});
	});

	describe('login', () => {
		beforeEach(async () => {
			await db('users').truncate();
			return request(server)
				.post('/api/auth/register')
				.send({ username: 'test2', password: '123' });
		});

		it('should login a user with valid credentials', async () => {
			const user = await request(server)
				.post('/api/auth/login')
				.send({ username: 'test2', password: '123' });

			expect(user.body).toHaveProperty('token');
			expect(user.status).toBe(200);
			expect(user.body.message).toBe('Welcome test2');
		});
	});
});
