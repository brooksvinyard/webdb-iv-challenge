
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipeBook.db3',
    },
    debug: true,
    useNullAsDefault: true, // needed for sqlite
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // by default SQLite will NOT enforce foreign keys
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); // enforce foreign keys in the db
      },
    },
  },
};
