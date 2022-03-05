const db = require('../models')
const Pet = db.pets
// const Op = db.Sequelize.Op

exports.create= (req,res)=>{
    if(!req.body.name || !req.body.age)
    return res.status(400).send('Provide Details')

    const pet = {
        name:req.body.name,
        age:req.body.age

    }
    Pet.create(pet).then(data=>{
        res.send(data)
    }).catch(err =>{
        res.status(500).send('Error Occured')
})
}
