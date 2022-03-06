const dbconfig = require("../config/dpconfig")
const Sequelize = require('sequelize')

  const sequelize = new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD,{
    host : dbconfig.HOST,
    dialect:dbconfig.dialect,
    operatorsAliases:false,
    pool:{
        max:dbconfig.pool.max,
        min:dbconfig.pool.min,
        acquire : dbconfig.pool.acquire,
        idle:dbconfig.pool.idle
    }
})

const db ={}

db.Sequelize = Sequelize
db.sequelize = sequelize;
db.users = require("./user.model")(sequelize, Sequelize);
db.pets = require("./pet.model")(sequelize, Sequelize);

db.users.belongsToMany(db.pets,{
  through : "user_pet_mapping",
  foreignKey:db.pets.id

})
db.pets.belongsToMany(db.users,{
  through : "user_pet_mapping",
  foreignKey:db.users.id

})
module.exports = db;    
