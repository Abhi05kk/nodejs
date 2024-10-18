const express =require('express')
const app=express()
const userRouter =require('./Router/user')
const products =require('./Router/products')

app.use(express.json())
app.use(express.urlencoded( {extended:true} ))

app.use('/user',userRouter)
app.use('/products',products)


app.use((err,req,res,next)=>{
    res.status(500).json({message:"server error",err:err})
})

app.listen(7000 ,()=>{
    console.log('server is running at port 7000 ')
})