const router = require("express").Router();
const {init, addtasks, deletetask} = require("../data/tasks")

let tasks = [{ id: 0, title: "Balayeuse", description: "Passer la balayeuse demain" }, 
             { id: 1, title: "Plancher", description: "Laver le plancher ce soir" }];
//let newId = 2

    router.get('/', init)

    router.post('/', addtasks)
    // router.post('/', (req, res) =>{
    
    //     const newTask = { 
    //       id: newId,
    //       title:req.body.title, 
    //       description:req.body.description
    //     }
    //     tasks.push(newTask)
    //     res.redirect('/tasks')
    //     newId++
    // })
    
    router.delete('/', deletetask)
    // router.delete('/', (req, res) =>{   
    //     delete tasks[req.body.id] // delete coté serveur
    //     res.send('supprimer une tâche')
    // })


/*

router.get('/', loadtasks)

*/

module.exports = router;