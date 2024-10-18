const express =require('express')
const { getAllproducts, getParticularProduct, addProduct, updateProduct  } = require('./controllers/productsController')
const router =express.Router()

router.get('/prodList',getAllproducts)
router.get('/prodList/:id',getParticularProduct)
router.post('/newProduct',addProduct)
router.put('/prodList/:id',updateProduct)


module.exports=router