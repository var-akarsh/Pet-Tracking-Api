module.exports =(sequelize,Sequelize)=>{
    const Pet = sequelize.define('pet',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:Sequelize.STRING,
            required:true
        },
        age:{
            type:Sequelize.INTEGER
        }
    })
    return Pet
}