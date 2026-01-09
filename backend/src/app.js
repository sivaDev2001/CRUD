const express = require('express')

const app = express()
// app.get("/user",(req,res,next)=>{
//     console.log('first handler')
//     next('route')
//     next()
// },(req,res)=>{
//     console.log('second route handler')
// })

// app.get('/user',(req,res)=>{
//     console.log('second router')
//     res.send('enter the id')
// })

// app.get('/user',(req,res,next)=>{
//     const err = new Error('there is an error')
//     next(err)
// })

// app.use((err,req,res,next)=>{
//     res.send(err.message)
// })
app.use((req,res,next)=>{
    console.log('first middleware')
    next()
})
app.use((req,res,next)=>{
    console.log('second middleware')
    next(new Error('there was an error'))
})
app.use((req,res,next)=>{
    console.log('third middleware')
    next()
})
app.use((err,req,res,next)=>{
    console.log('fourth middleware')
    res.send(err.message)
})

app.listen(3000,()=>{
    console.log('app is successfully running')
})