const request = require('supertest');

const server = require('./school-router');
const db = require('../data/dbConfig');

it('should set db environment to test', function() {
	expect(process.env.DB_ENV).toBe('testing');
});
