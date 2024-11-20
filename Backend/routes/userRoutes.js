const express=require("express")
const mongoose=require("mongoose")
const router=express.Router();
const User=require("../models/userModel")
router.post('/',async (req,res)=>{
    const {name,email,age}=req.body
     try{
       const userAdded=await User.create({
           name:name,
           email:email,
           age:age,
       });
       res.status(201).json(userAdded)
     } catch(error){
       console.log(error)
       res.status(400).send({error:error.message})
     }
    })
router.get('/',async (req,res)=>{
   try{
       const data=await User.find();
       res.status(200).json(data)
   } catch(error){
       console.log(error)
       res.send(500).json({error:error.message})
   }
   
}); 
 module.exports=router
 