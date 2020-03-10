//Configuration des requires
const fs = require('fs')
const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require("./routes")
const path = require('path')

//Configurer le 'body-parser'
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public'))) 

//Attribuer la valeur du 'view engne' à 'pug'
app.set('view engine', 'pug')


app.use('/', routes)


app.get('/', (req, res) => {
  res.render('home')
})


app.listen(3000)