const express = require('express')
const app = express()
const route = require('./routes/index')
const port = process.env.port || 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(route)

app.listen(port, () => {
    console.log(`this app running on port ${port}`)
})