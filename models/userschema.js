const mongoose=require("mongoose");
const minminmin_section=mongoose.Schema({
    title:{
        type:String,
    },
    marks_alloted:{
        type:Number,
    },
    max_marks:{
        type:Number,
    },
    verificationstatus:{
        type:Boolean,
        default:false,
    },
    uploadeddocument:{
        type:String,
    },
    teacherfeedback:{
        type:String,
        default:"",
    }
})
const minmin_section=mongoose.Schema({
    main_category:{
        type:String,
    },
    sub_category:[minminmin_section],
})
const minischema=mongoose.Schema({
    s1:{
        type:String,
    },
 });
 const min_section=mongoose.Schema({
    sem:{
        type:Number,
    },
    category:[minmin_section],
 })
 const userschema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    rollno:{
        type:Number,
    },
    current_sem:{
        type:Number,
    },
    sec:{
        type:String, 
    },
    section:[min_section]
 });
 const User=mongoose.model("Usercollections_2",userschema);
 module.exports=User;