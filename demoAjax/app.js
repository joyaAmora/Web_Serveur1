const express = require('express')
const app = express()
const routes = require('./routes') //par défault prends pour acquis index.js
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public'))) // visible de l'extérieur

app.set('view engine', 'pug')

app.use('/', routes)


app.listen(3000, () =>{
    console.log('open on port 3000')
})