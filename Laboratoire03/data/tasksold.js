const fs = require('fs')
let tasks = [{ id: 0, title: "Balayeuse", description: "Passer la balayeuse demain" }, 
             { id: 1, title: "Plancher", description: "Laver le plancher ce soir" }];
let newId = 2


exports.init = async (req, res) =>{
    res.render('tasks', { tasks }) //puisqu'on a aucun paramètre
}

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
    
  exports.addtasks = async (req, res) =>{
   const tasks = loadtasks()
   savetasks(tasks)
    tasks.push({
      id: newId,
      title: req.body.title,
      body: req.body.description
    })

        // const newTask = { 
        //   id: newId,
        //   title:req.body.title, 
        //   description:req.body.description
        // }
        //tasks.push(newTask)
        
        //res.render("includes/task", { task: newTask })
        res.redirect('/tasks')
        newId++
        
  }

  exports.deletetask = async (req, res) => {
    delete tasks[req.body.id] // delete coté serveur
    res.send('supprimer une tâche')
  }

//   app.post('/tasks', ({body}, res) => {
//     const newTask = { id: body.id, title: body.title, description: body.description }
//     tasks.push(newTask)
//     res.redirect('/tasks')
//     addtasks(body.id, body.title, body.description)
// })