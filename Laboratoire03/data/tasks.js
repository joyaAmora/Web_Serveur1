//CRUD UNIQUEMENT pas de req, res

const fs = require('fs')

 const loadtasks = () => {

    try{
        const dataBuffer = fs.readFileSync('./data/tasks.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e) {
        return {nextID:1, tasks:[]}
    }
  }

  exports.listTasks = () => {
      const data = loadtasks()
      return data.tasks
  }

 exports.addtask= (title, description) => {

    if (title != undefined || description != undefined) {
     //ajouter les taches
     const data = loadtasks()
     const newTask = {
        id: data.nextID++,
        title: title,
        description: description
     }
     data.tasks.unshift(newTask)
     savetasks(data)
      // l'inverse de push donc met au début
     return newTask
    }
 }

 const savetasks = (data) => {
    const dataJSON = JSON.stringify(data)
    fs.writeFileSync('./data/tasks.json', dataJSON)
}

exports.remove = (id) => {
    const data = loadtasks()
    const task = data.tasks.find(task => task.id == id)
    data.tasks = data.tasks.filter(task => task.id != id) // fait un foreach
    savetasks(data)
    return task
}