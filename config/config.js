require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.MYSQL_PW,
    database: "authorhallett_db",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    database: process.env.JAWSDB_URL,
    dialect: "mysql",
  },
};
