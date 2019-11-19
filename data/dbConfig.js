const knex = require('knex');

const knexConfig = require('../knexfile');
const environment = process.env.NODE_ENV || process.env.DB_ENV || 'development';

module.exports = knex(knexConfig.testing);
