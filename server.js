const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./models/index')

var corsOptions = {
    origin: "https://localhost:3001"
}

app.use(express.json())

app.use(express.urlencoded({
    extended:true

}))

db.sequelize.sync()

app.get('/',(req,res)=>{
    res.json({message:'Welcome'})
})

require("./routes/user.routes")(app)

app.listen(3000,()=>{
    console.log('Server Running on port 3000')
})

