const router = require("express").Router();

let tasks = [{ number: 0, title: "Balayeuse", description: "Passer la balayeuse demain" }, 
             { number: 1, title: "Plancher", description: "Laver le plancher ce soir" }];

router.get("/tasks", (req, res) => {
  res.render("tasks", { tasks });
});

router.post("/tasks", ({body}, res) => {
  const newTask = { number: body.number, title: body.title, description: body.description };
  tasks.push(newTask);
  res.render("includes/tasks", { task: newTask });
});

module.exports = router;