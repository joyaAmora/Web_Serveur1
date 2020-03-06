//Configuration des requires
const fs = require('fs')
const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require("./routes")

//Configurer le 'body-parser'
app.use(bodyParser.urlencoded({extended:true}))

//Attribuer la valeur du 'view engne' à 'pug'
app.set('view engine', 'pug')

var tasks = [
  { id: 0, title: "Balayeuse", description: "Passer la balayeuse demain" },
  { id: 1, title: "Plancher", description: "Laver le plancher ce soir" }
];

//Utiliser Express pour trapper des routes spécifiques
app.get('/tasks', (req, res) => {
    res.render('tasks', { tasks })
})

app.get('/', (req, res) => {
  res.render('home')
})

const loadtasks = () => {

  try{
      const dataBuffer = fs.readFileSync('./data/tasks.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
  }
  catch(e) {
      return []
  }
}

  const savetasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync('./data/tasks.json', dataJSON)
}
  
const addtasks = (id, title, body) =>{
  const tasks = loadtasks()
  tasks.push({
    id,
    title: title,
    body: body
})
savetasks(tasks)
}

//Lancer le serveur
app.post('/tasks', ({body}, res) => {
    const newTask = { id: body.id, title: body.title, description: body.description }
    tasks.push(newTask)
    res.redirect('/tasks')
    addtasks(body.id, body.title, body.description)
})


app.listen(3000)