//config response
require('dotenv').config();

module.exports = {
  baby: process.env.USER_POSTGRESQL,
  db: {
    user: process.env.USER_POSTGRESQL,
    password: process.env.PASSWORD_POSTGRESQL,
    database: process.env.DATABASE_POSTGRESQL,
    host: process.env.HOST_POSTGRESQL,
    port: process.env.PORT_POSTGRESQL,
    dialect: 'postgres',
    dialectModule: require('pg')
  },
  status: {
    success: 1,
    failed: 0
  },
  httpStatus: {
    success: 200,
    created: 201,
    notfound: 404,
    badRequest: 400,
    conflict: 409
  },
}
