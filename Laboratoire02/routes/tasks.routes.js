const router = require("express").Router();
const taskManager = require("../data/tasks")


    router.get('/', (req, res) => {
        res.render("tasks", { tasks: taskManager.listTasks() })
    })


    router.post('/', (req, res) => { //back end a reçu le post
        taskManager.addtask(req.body.title, req.body.description)
        res.redirect('/tasks')
        //res.render("includes/brand", { brand: newBrand })
    })
    // router.post('/', (req, res) =>{
    
    //     const newTask = { 
    //       id: newId,
    //       title: req.body.title, 
    //       description:req.body.description
    //     }
    //     tasks.push(newTask)
    //     res.redirect('/tasks')
    //     newId++
    // })
    
    //router.delete('/', deletetask)
    // router.delete('/', (req, res) =>{   
    //     delete tasks[req.body.id] // delete coté serveur
    //     res.send('supprimer une tâche')
    // })


/*

router.get('/', loadtasks)

*/

module.exports = router;