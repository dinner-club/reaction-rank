module.exports = {
  development: {
    username: process.env.DB_ADDRESS,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_ADDRESS,
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_ADDRESS,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_ADDRESS,
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_ADDRESS,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_ADDRESS,
    dialect: "postgres"
  }
};
