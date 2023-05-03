const express  = require("express")
const router = express.Router()

const {getSingleUser,loginUser,signupUser,getUser} = require("../controllers/userController")

router.get("/users/:id",getSingleUser)

router.get("/users", getUser)
//login route
router.post("/login",loginUser)

//signup route 
router.post("/signup",signupUser)



module.exports = router

