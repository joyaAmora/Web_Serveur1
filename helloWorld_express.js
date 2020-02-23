const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.post('/', (req, res) => {
    console.log(req.body)
    console.log(req.body.name)
    console.log(req.body.parent.age)
})

app.listen(3000)