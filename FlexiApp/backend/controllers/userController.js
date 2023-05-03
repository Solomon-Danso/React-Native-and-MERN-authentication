const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const mongoose = require('mongoose')



const createToken = (_id)=>{
return jwt.sign({_id},"ysdfgdgcuyiuedgcweyfgryvhfvgh",{expiresIn:'3d'})
}


const getUser = async (req,res) =>{
    const user = await User.find({})
    res.status(200).json(user)

}

const getSingleUser = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such user'})
    }
  
    const user = await User.findById(id)
  
    if (!user) {
      return res.status(404).json({error: 'No such user'})
    }
    
    res.status(200).json(user)
  }
  

const getSingleUse = async(req,res)=>{
    await User.findById(req.params.id,(err,user) =>{
        if(err){
            console.error(err)
            res.status(500).send("Error finding user")
        }
        else{
            res.json(user)
        }
    })
}



//login user 

const loginUser = async (req,res) => {

    const {email,password} = req.body

    try{
        const user = await User.login(email,password)
        
        //create token
        const token = createToken(user._id)
    
    
        res.status(200).json({email,token})
    
        }catch(error){
    
        res.status(400).json({error:error.message})
        }

}



//signup user

const signupUser = async (req,res) => {
    const {name,email,password} = req.body
    try{
    const user = await User.signup(name,email,password)
    
    //create token
    const token = createToken(user._id)


    res.status(200).json({email,token})

    }catch(error){

    res.status(400).json({error:error.message})
    }
   
    
    }
    
module.exports = {
    loginUser,
    signupUser,
    getUser,
    getSingleUser
 
}