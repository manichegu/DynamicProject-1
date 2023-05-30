const mongoose=require("mongoose");
const students_details=mongoose.Schema({
    rollno:{
        type:Number,
    },
})
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
    students:[students_details],
 });
 const User_teacher=mongoose.model("Userteacherscollections",userschema);
 module.exports=User_teacher;