const express = require('express')

const app = express()

app.use("/",(req,res)=>{
    res.send('hello from home page')
})

app.use("/test",(req,res)=>{
    res.send('hello world')
})

app.listen(3000,()=>{
    console.log('app is successfully running')
})