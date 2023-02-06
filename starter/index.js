
const express=require("express")
const morgan=require("morgan")



const app=express()
const tourRouter=require('./route/tourroutes')
const userRouter=require("./route/userRoute")

//// MiddleWare 

app.use(morgan("common"))


app.use(express.json())
app.use((req,res,next)=>{
    req.requestTime=new Date().toISOString()
    next()
})

 app.use('/api/v1/tours', tourRouter)
 app.use("/api/v1/users", userRouter)

app.listen(3000,()=>{
    console.log("server is running in port 3000")
   
    
})