const express = require('express')
const app = express()

app.set('view engine', 'pug')

const members = [{"name": "mario"}, {"lastName": "bros"}]

app.get('/', (req,res) => {
    res.render("home", {members})
})

app.listen(3000)