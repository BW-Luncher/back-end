const request = require('supertest');

const server = require('../server');
const db = require('../data/dbConfig');

it('should set db environment to test', function() {
	expect(process.env.DB_ENV).toBe('testing');
});

describe('server', function() {
	describe('GET /api/schools', function() {
		it('should return current list of schools', function() {
			return request(server)
				.get('/api/schools')
				.expect(200);
		});
	});
});

// describe('server', function () {
// 	describe('REGISTER /api/auth/register', function () {
// 		beforeEach(async () => {
// 			await db('users').truncate();
// 		});
// 		it('should return status 201', function () {
// 			return request(server)
// 				.post('/api/auth/register')
// 				.send({ username: 'student3' })
// 				.send({ password: 'pass' })
// 				.expect(201, {
// 					message: 'successfully registered'
// 				});
// 		});

// 		it('should not register a user', function () {
// 			return request(server)
// 				.post('/api/auth/register')
// 				.send({ username: 'student3' })
// 				.send({ passwordd: 'pass' })
// 				.expect(500, {});
// 		});
// 	});
// });
