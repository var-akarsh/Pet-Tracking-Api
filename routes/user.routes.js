
module.exports = app => {
    const users = require('../controllers/user.controller')
    const router = require('express').Router()
    const pets = require('../controllers/pet.controllers')
    router.post('/signup', users.create)
    router.post('/signin', users.signin)
    router.post('/getOTP', users.getOTP)
    router.post('/signout',users.signout)
    router.post('/:id/addpet', pets.create)
    router.get('/:id/getme',users.getuser)

    app.use('/api/users', router)

} 