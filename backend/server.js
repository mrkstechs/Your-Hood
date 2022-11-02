const path = require('path')
const fs = require('fs')
const express = require('express')
const apiRouter = require('./routes/api')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api', apiRouter)

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Your Hood!</h1>')
})

app.listen(port,  () => console.log(`> Your Hood online. http://localhost:${port}`))


