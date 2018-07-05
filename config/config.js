module.exports = {
  development: {
    username: "root",
    password: process.env.LOCALDB_PASSWORD,
    database: "burgers_db",
    host: "localhost",
    dialect: "mysql"
  },
  production: {
    use_env_variable: "JAWSDB_URL"
  }
}