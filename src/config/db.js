import knex from 'knex'

export default knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'senhaBMS16!',
    database: 'opto'
  }
})