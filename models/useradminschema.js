const mongoose=require("mongoose");
const userschema=mongoose.Schema({
    name:{
        type:String,
    },
    password:{
        type:String,
    },
    email:{
        type:String,
    },
    mobile_no:{
        type:Number,
    },
 });
 const User_admin=mongoose.model("Useradminscollections",userschema);
 module.exports=User_admin;