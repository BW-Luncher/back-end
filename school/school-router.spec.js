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

describe('server', function() {
	describe('GETbyId /api/schools', function() {
		beforeEach(async () => {
			await db('schools').truncate();
			return request(server)
				.post('/api/schools')
				.set(
					'Authorization',
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0dWRlbnQiLCJwYXNzd29yZCI6IiQyYSQxMiRJYzBWWGEwOTJlQjFGdThrUGJLLzNlYlFadGozblVkLi56dnpHWmk0Y1RTUkpONS51L0tJaSIsImlhdCI6MTU3NDExODM0NiwiZXhwIjoxNTc0NTUwMzQ2fQ.2QO8XVMtNe8T2U06a6Ky2ID5rCkDpnSfEtYNVBU7cUE'
				)
				.send({
					school: 'test',
					address: 'test 123',
					funds_needed: 500,
					goal: 1000
				});
		});
		it('should return current list of schools', function() {
			return request(server)
				.get('/api/schools/1')
				.expect(200, {
					id: 1,
					school: 'test',
					school_insignia: null,
					address: 'test 123',
					email: null,
					funds_needed: 500,
					funds_given: null,
					goal: 1000
				});
		});
	});
});

describe('server', function() {
	describe('POST /api/schools', function() {
		beforeEach(async () => {
			await db('schools').truncate();
		});
		it('should add a school to schools DB', function() {
			return request(server)
				.post('/api/schools')
				.set(
					'Authorization',
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0dWRlbnQiLCJwYXNzd29yZCI6IiQyYSQxMiRJYzBWWGEwOTJlQjFGdThrUGJLLzNlYlFadGozblVkLi56dnpHWmk0Y1RTUkpONS51L0tJaSIsImlhdCI6MTU3NDExODM0NiwiZXhwIjoxNTc0NTUwMzQ2fQ.2QO8XVMtNe8T2U06a6Ky2ID5rCkDpnSfEtYNVBU7cUE'
				)
				.send({
					school: 'test',
					address: 'test 123',
					funds_needed: 500,
					goal: 1000
				})
				.expect(201, {
					id: 1,
					school: 'test',
					school_insignia: null,
					address: 'test 123',
					email: null,
					funds_needed: 500,
					funds_given: null,
					goal: 1000
				});
		});
	});
});

describe('server', function() {
	describe('PUT /api/schools', function() {
		beforeEach(async () => {
			await db('schools').truncate();
			return request(server)
				.post('/api/schools')
				.set(
					'Authorization',
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0dWRlbnQiLCJwYXNzd29yZCI6IiQyYSQxMiRJYzBWWGEwOTJlQjFGdThrUGJLLzNlYlFadGozblVkLi56dnpHWmk0Y1RTUkpONS51L0tJaSIsImlhdCI6MTU3NDExODM0NiwiZXhwIjoxNTc0NTUwMzQ2fQ.2QO8XVMtNe8T2U06a6Ky2ID5rCkDpnSfEtYNVBU7cUE'
				)
				.send({
					school: 'test',
					address: 'test 123',
					funds_needed: 500,
					goal: 1000
				});
		});
		it('should add a school to schools DB', function() {
			return request(server)
				.put('/api/schools/1')
				.set(
					'Authorization',
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0dWRlbnQiLCJwYXNzd29yZCI6IiQyYSQxMiRJYzBWWGEwOTJlQjFGdThrUGJLLzNlYlFadGozblVkLi56dnpHWmk0Y1RTUkpONS51L0tJaSIsImlhdCI6MTU3NDExODM0NiwiZXhwIjoxNTc0NTUwMzQ2fQ.2QO8XVMtNe8T2U06a6Ky2ID5rCkDpnSfEtYNVBU7cUE'
				)
				.send({
					school: 'testPUT',
					address: 'test 123',
					funds_needed: 500,
					goal: 1000
				})
				.expect(200, {
					id: 1,
					school: 'testPUT',
					school_insignia: null,
					address: 'test 123',
					email: null,
					funds_needed: 500,
					funds_given: null,
					goal: 1000
				});
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
