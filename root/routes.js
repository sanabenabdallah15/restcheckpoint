const mongoose=require('mongoose')
const express=require('express')
const route=express.Router()
const user=require('../models/User')
//testt
route.get('/',(req,res)=>{
    res.send("helloooo")
})
//getusers
route.get('/users',async(req,res)=>{
    try{
        const users=await user.find();
        res.send(users)
    }
    catch (error){
       console.log(err)

    }
    
})
//postusers
route.post('/add',async(req,res)=>{
    const {username,email}=req.body;
    try{
        const newUser=new user ({username,email})
    


    const user= await newUser.save()

res.send({msg:"user added",user})
} catch(err){
        console.log(err)
}
})
//putusers
route.put('/users/:_id',async(req,res)=>{
    const{id}=req.params
    const {username,email}=req.body;
    try{
        const updatedUser=await user.findByIdAndUpdate(id,{username,email});

        res.send({msg:"user updated",user});


    }
    catch(error){
        console.log(err)
    }
})
//deleteuser
route.delete('/users/:_id',async(req,res)=>{
    const{id}=req.params
    try{
        const deleteduser=await user.findByIdAndDelete(id)
     res.send({msg:"user deleted",deleteduser})


    }
    catch(error){
       console.log(err)
    }
    
})
module.exports=route