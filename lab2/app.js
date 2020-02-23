const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");

var tasks = [
  { title: "Balayeuse", description: "Passer la balayeuse demain" },
  { title: "Plancher", description: "Laver le plancher" }
];

app.get("/tasks", (req, res) => {
  res.render("tasks", { tasks });
});

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/tasks", ({body}, res) => {
  const newTask = { title: body.title, description: body.description };
  tasks.push(newTask);
  res.redirect("/tasks");
});

app.listen(3000);
