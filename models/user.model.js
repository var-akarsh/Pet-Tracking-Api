module.exports = (sequelize,Sequelize)=>{
    
    
    const User = sequelize.define("user",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        password:{
            type: Sequelize.STRING
        },
        name:{
            type:Sequelize.STRING
        },
        mobileNumber :{
            type:Sequelize.STRING,
            unique:true
        },
        email:{
            type:Sequelize.STRING,
            unique:true
        },
        otp:{
            type:Sequelize.STRING
        }
        
        })

     return User   
}