const fs=require("fs")
const express=require("express")

const app=express()
app.use(express.json())

const tours=JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({
        status:"success",
        results:tours.length,
        data:{
            tours
        }
    })
})

app.get('/api/v1/tours/:id',(req,res)=>{
    console.log(req.params)

    const id=Number(req.params.id)

    if(id>tours.length){
        return res.status(404).json({
status:'fail',
message:'Invalid ID'
        })
    }
    const tour=tours.find(ele=>ele.id===id)
    res.status(200).json({
        status:"success",
        data:{
            tour
        }
    })
})
app.post('/api/v1/tours',(req,res)=>{
    const newId=tours[tours.length-1].id+1
    const newTour=Object.assign({id:newId},req.body)
    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
        res.status(201).json({
            status:"success",
            data:{
                tour:newTour
            }
        })
    })

})

app.listen(3000,()=>{
    console.log("server is running in port 3000")
})