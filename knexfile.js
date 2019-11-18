// Update with your config settings.
require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      //DB_DEV_DATABASE = apiluncher
      //DB_DEV_USER = gavindreyer
      database: process.env.DB_DEV_DATABASE,
      user: process.env.DB_DEV_USER
    },
    migrations: {
      diretcory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
