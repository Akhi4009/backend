const fs=require("fs")


const getAllUser=(req,res)=>{
    res.status(200).json({
        status:"success",
        requestTime:req.requestTime,
       })
}

const getUser=(req,res)=>{
    console.log(req.params)

    const id=Number(req.params.id)

    res.status(200).json({
        status:"success",
       })
}

const createUser=(req,res)=>{
    res.send("data added")
  
}

const updateUser=(req,res)=>{
    

    res.status(200).json({
        status:"success",
       
    })
}
const deleteUser=(req,res)=>{
  

    res.status(204).json({
        status:"success",
        data:null
    })
}

module.exports={getAllUser,getUser,createUser,updateUser,deleteUser}