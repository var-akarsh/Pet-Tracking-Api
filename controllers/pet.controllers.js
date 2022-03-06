const db = require('../models')
const Pet = db.pets
// const Op = db.Sequelize.Op

exports.create= async (req,res)=>{
    if(!req.body.name || !req.body.age || !req.params.id)
    return res.status(400).send('Provide Details')
    
    const user = await db.users.findByPk(req.params.id)
    const pet = {
        name:req.body.name,
        age:req.body.age
    }
    const data = await Pet.create(pet).catch(err =>{
        res.status(500).send('Error Occured')
    })
    await user.addPet(data)
    res.send(data)
}
