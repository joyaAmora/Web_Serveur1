const router = require("express").Router();
const tasksRoutes = require("./tasks.routes")

router.get("/", (req, res) => {
  res.render("home")
})

router.use("/tasks", tasksRoutes)

module.exports = router;