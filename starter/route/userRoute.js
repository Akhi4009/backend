
const express=require("express")

const {getUser,getAllUser,createUser,updateUser,deleteUser}=require("../controller/usercontroller")
const router=express.Router()






router
.route('/')
.get(getAllUser)
.post(createUser)

router
.route('/:id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser)


module.exports=router