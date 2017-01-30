// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'classifieds_dev',
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'classifieds_test',
    }
  },
  production: { }
}
