const mongoose=require("mongoose");
//creating a schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    age:{
        type:Number,
    },
},{timestamps:true});
// create a  model by which we create database opearation
const User=mongoose.model("User",userSchema)
module.exports=User;
