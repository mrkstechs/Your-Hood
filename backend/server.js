const path = require('path')
const fs = require('fs')
const express = require('express')
const cors = require('cors')
const apiRouter = require('./routes/api')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../frontend/assets')))

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../frontend/index.html')))

app.use('/api', apiRouter)

app.listen(port,  () => console.log(`> Your Hood online. http://localhost:${port}`))


