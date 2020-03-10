//CRUD UNIQUEMENT pas de req, res

const fs = require('fs')
 let tasks= []
 const newId = 0;

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

  exports.listTasks = () => {
      tasks = loadtasks()
      return tasks
  }

 exports.addtask= (title, description) => {
     //ajouter les taches
     tasks = loadtasks()
     const newTask = {
        id: newId++,
        title: title,
        body: description
     }
     tasks.push(newTask) // ajoute a la fin doit ajouter au début trouver comment
    // ajouter savetasks ici
     return newTask
 }

 const savetasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync('./data/tasks.json', dataJSON)
}