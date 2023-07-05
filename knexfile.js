// Update with your config settings.

/* Connect info: 
  docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \
  -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
  
  docker exec -it <PSQL-Container-ID> bash

  psql -U postgres

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      database: process.env.DB_DB,      
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
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
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
