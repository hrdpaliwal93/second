import 'dotenv/config'
import express from 'express'
import  {userModel } from './db.js'
import JWT from 'jsonwebtoken'

const app = express()




app.post('/api/v1/signup', async (req,res)=>{
    const {username, password} = req.body
   try{
    await  userModel.create({
         username,
         password
    })
    res.send({
        message:"signed up successful !",
        success:true
    }).status(200)
    
   }catch(e){
    console.log(e)
   }

})

app.post('/api/v1/login' , async (req,res)=>{
    const {username, password} = req.body
    try{
        let user  = await userModel.findOne({username, password})
        if(user){
            let token = JWT.sign({id:user._id.toString()}, `${process.env.jwt_secret}`)
            res.json({message:"logged in " , success:true, token:token}).status(200)
        }else{
            res.json({message:"invalid login details " , success:false})
        }
        
    }catch(e){
        console.log(e)
    }
})



app.listen('8000')