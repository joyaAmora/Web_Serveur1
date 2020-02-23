//Configuration des requires
const fs = require('fs')
const express = require ('express')
const app = express()
const bodyParser = require('body-parser')

//Configurer le 'body-parser'
app.use(bodyParser.urlencoded({extended:true}))

//Attribuer la valeur du 'view engne' à 'pug'
app.set('view engine', 'pug')

var tasks = [
  { title: "Balayeuse", description: "Passer la balayeuse demain" },
  { title: "Plancher", description: "Laver le plancher ce soir" }
];

//Utiliser Express pour trapper des routes spécifiques
app.get('/tasks', (req, res) => {
    res.render('tasks', { tasks })
})

app.get('/', (req, res) => {
  res.render('home')
})

const loadNotes = () => {

  try{
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
  }
  catch(e) {
      return []
  }
}

  const saveNotes = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync('notes.json', dataJSON)
}
  
const addNotes = (title, body) =>{
  const notes = loadNotes()
  notes.push({
    title: title,
    body: body
})
saveNotes(notes)
}

//Lancer le serveur
app.post('/tasks', ({body}, res) => {
    const newTask = { title: body.title, description: body.description }
    tasks.push(newTask)
    res.redirect('/tasks')
    addNotes(body.title, body.description)
})


app.listen(3000)