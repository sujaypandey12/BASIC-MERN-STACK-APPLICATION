const express=require("express")
const app=express();
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const userRouter=require("./routes/userRoutes")
dotenv.config()

mongoose.connect(process.env.URI).then(()=>{
    console.log("connected Successfully");
    app.listen(process.env.PORT || 8000,(err)=>{
       if(err) console.log(err);
       console.log("running successfull at",process.env.PORT)
    });
})
.catch((error)=>{
    console.log("error",error);
}) 
app.use(userRouter)

