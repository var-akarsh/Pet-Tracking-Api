module.exports=(sequelize,Sequelize)=>{
    const petLocation = sequelize.define('petLocation',{

        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        location:{
            type:Sequelize.STRING,
            
        }


    })



}