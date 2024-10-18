const express =require('express')
const { getAllUsers, getParticularUser, addUser, updateUser } = require('./controllers/userController')
const router =express.Router()

router.get('/userList',getAllUsers)
router.get('/userList/:id',getParticularUser)
router.post('/newUser',addUser)
router.put('/userList/:id',updateUser)


module.exports=router