const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")
const autoIncrement = require("mongoose-auto-increment")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },


  
  
   

})



//Static signup method
userSchema.statics.signup = async function(name,email,password){

//validation
if(!email || !password ||!name){
    throw Error("All fields must be filled ")
}

if(!validator.isEmail(email)){
    throw Error("Email is not valid")
}

//if(!validator.isStrongPassword(password)){
//    throw Error("Password is not strong enough")
//}

    //check whether email already exist 
const exists = await this.findOne({ email })
if (exists){
    throw Error("Email already in use")
}

//Generating Salt
const salt = await bcrypt.genSalt(10)
const hash = await bcrypt.hash(password,salt)

//Creating A User
const user = await this.create({name,email,password:hash})
return user

}

//login

userSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw Error("Incorrect Email OR PASSWORD")
    }

    const user = await this.findOne({ email })
if (!user){
    throw Error("Incorrect Email")
}

const match = await bcrypt.compare(password,user.password)    

if(!match){
    throw Error("Incorrect password")

}

return user

}



module.exports = mongoose.model("User",userSchema)
