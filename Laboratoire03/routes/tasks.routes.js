const router = require("express").Router();
const taskManager = require("../data/tasks")


    router.get('/', (req, res) => {
        res.render("tasks", { tasks: taskManager.listTasks() })
    })


    router.post('/', (req, res) => { //back end a reçu le post
        const newTask = taskManager.addtask(req.body.title, req.body.description)
        res.redirect('/tasks')
        //res.render("includes/task", { task: newTask })
    })
    
    router.delete('/', (req, res) =>{ 
        const task = taskManager.remove(req.body.id)  
         // delete coté serveur
         //res.render("includes/task", { task: newTask })
         //res.render("task", { tasks: taskManager.listTasks() })
         res.send(task)
    })


module.exports = router;