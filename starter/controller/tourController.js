const fs=require("fs")



const tours=JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

const checkBody=(req,res,next)=>{
if(!req.body.name || !req.body.price){
    return res.status(400).json({
        status:"fail",
        message:"Missing name or price"
    })
    }
    next()
}
const checkId=(req,res,next,val)=>{
    console.log(`Tour id is ${val}`);

    const id=Number(req.params.id)
    if(id>tours.length){
        return res.status(404).json({
status:'fail',
message:'Invalid ID'
        })
    }
next()
}

const getAllTour=(req,res)=>{
    res.status(200).json({
        status:"success",
        requestTime:req.requestTime,
        results:tours.length,
        data:{
            tours
        }
    })
}

const getTour=(req,res)=>{
    console.log(req.params)

    const id=Number(req.params.id)
    
    const tour=tours.find(ele=>ele.id===id)
    res.status(200).json({
        status:"success",
        data:{
            tour
        }
    })
}

const createTour=(req,res)=>{
    const newId=tours[tours.length-1].id+1
    const newTour=Object.assign({id:newId},req.body)
    tours.push(newTour)
    fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
        res.status(201).json({
            status:"success",
            data:{
                tour:newTour
            }
        })
    })
}

const updateTour=(req,res)=>{
   
    res.status(200).json({
        status:"success",
        data:{
            tour:'<Updated tour here>'
        }
    })
}
const deleteTour=(req,res)=>{
   res.status(204).json({
        status:"success",
        data:null
    })
}

module.exports={getAllTour,getTour,createTour,updateTour,deleteTour,checkId,checkBody}