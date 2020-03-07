const router = require('express').Router()

let brands = [{name:'toyota'},{name:'honda'},{name:'lada'}]


router.get('/', (req, res) =>{
    res.render('brands', {brands}) //puisqu'on a aucun paramètre
})
router.post('/', (req, res) =>{

    const newBrand = { name:req.body.name }
    brands.push(newBrand)
    res.render("includes/brand", { brand: newBrand }) // reload la page et les brands
    //meme chose res.redirect('/brands')  va donc déclencher le router.get
})

router.patch('/', (req, res) =>{
    res.send('modifier une marque')
})

router.delete('/', (req, res) =>{
    res.send('supprimer une marque')
})

module.exports = router