module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "my-secret-pw",
    DB: "pet",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }