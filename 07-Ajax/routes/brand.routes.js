const router = require("express").Router();

let brands = [{ name: "Toyota" }, { name: "Mazda" }, { name: "Honda" }];

router.get("/", (req, res) => {
  res.render("brands", { brands });
});

router.post("/", (req, res) => {
  const newBrand = { name: req.body.name };
  brands.push(newBrand);
  res.render("includes/brand", { brand: newBrand });
});

module.exports = router;
