const router = require('express').Router()
const brandsRoutes= require('./brands.routes')

router.get('/', (req, res) => {
    res.send('Home pages')
})

router.use('/brands', brandsRoutes)


module.exports = router