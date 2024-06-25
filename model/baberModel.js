const mongoose=require("mongoose")

const baberSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,`kindly insert your name`]
    },
    email:{
        type:String,
        unique:true,
        required:[true,`kindly insert your email`],
        
    },
    password:{
        type:String,
        required:[true,`kindly insert your password`]
    },
    hairCut:{
        type:String,
        required:[true,`kindly insert your haircut`]
    }
},{timestamps:true});

const baberModel=mongoose.model("baberdtabase",baberSchema);

module.exports=baberModel