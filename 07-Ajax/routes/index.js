const router = require("express").Router();
const brandsRoutes = require("./brand.routes")

router.get("/", (req, res) => {
  res.render("home")
})

router.use("/brands", brandsRoutes)

module.exports = router;