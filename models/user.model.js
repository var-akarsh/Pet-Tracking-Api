module.exports = (sequelize,Sequelize)=>{
    const User = sequelize.define("user",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
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
        },
        tokens:[{
            token:{
                type:Sequelize.STRING,
                required: true
            }
            }]
        
        })
     return User   
}