require('dotenv').config()
const express = require('express')
const app = express()
const route = require('./routes/index')
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(route)

app.use((err, req, res, next) => {
    if(err.status){
        res.status(err.status).json({
            message: err.message
        })
    } else if(err.name = `SequelizeValidationError`){
        res.status(401).json({
            message: err.errors[0].message
        })
    } else{
        res.status(500).json({
            message: err
        })
    }
})

app.listen(port, () => {
    console.log(`this app running on port ${port}`)
})