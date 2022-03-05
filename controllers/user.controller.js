const db = require('../models')
const User = db.users
const Op = db.Sequelize.Op
const otpGenerator = require('otp-generator')
const jwt = require('jsonwebtoken')


User.prototype.toJSON =  function () {
  var values = Object.assign({}, this.get());

  delete values.password;
  delete values.otp;
  return values;
}

// User.prototype.generateAuthToken = async function() {
//     const user = this
//     const token = jwt.sign({ _id: user._id.toString() }, 'secret-token')

//     user.tokens = user.tokens.concat({ token })
//     await user.save()
//     return token
// }


exports.create =(req,res)=>{
    if(!req.body.name || !req.body.mobileNumber ||!req.body.email)
    return res.status(400).send('Provide Credentials for the user')
    
    // const token = jwt.sign()
    const user ={
        name:req.body.name,
        mobileNumber:req.body.mobileNumber,
        email:req.body.email,
        tokens:[]
    }
    User.create(user).then(data=>{
        res.send(data)
    }).catch(err =>{
        res.status(500).send('Error Occured')
    })

}


exports.signin = async (req,res)=>{
    if(!req.body.mobileNumber)
    return res.status(400).send('Enter Mobile Number')

    const user = await User.findOne({where :{mobileNumber:req.body.mobileNumber}})
    if(!user)
    return res.status(404).send('')
    user.active =true
    if(req.body.otp !== user.otp)
    return res.send('Invalid OTP')
    res.send(user)
    
}

exports.getOTP = async (req,res)=>{
    if(!req.body.mobileNumber)
    return res.status(400).send('Enter Mobile Number')

    const user = await User.findOne({where :{mobileNumber:req.body.mobileNumber}})
    if(!user)
    return res.status(404).send('Enter Mobile Number')
    user.active =true
    user.otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets:false });
    await user.save()
    res.send('Your OTP is '+ user.otp)
    
}

exports.signout = async (req,res)=>{
    if(!req.body.mobileNumber)
    return res.status(400).send('Enter Mobile Number')
    const user = await User.findOne({where :{mobileNumber:req.body.mobileNumber}})
    if(!user)
    return res.status(404).send('Enter Mobile Number')

    user.active = false;
    await user.save()
    res.send('Successfully logged out ')

}




