const {signUp,login}=require("../controller/baberController")


const router=require("express").Router()

router.post("/createuser",signUp)
router.get("/login",login)

module.exports=router 