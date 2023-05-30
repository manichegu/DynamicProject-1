const mongoose=require("mongoose");
const students_details=mongoose.Schema({
    rollno:{
        type:Number,
    },
})
const userschema=mongoose.Schema({
    event_name:{
        type:String,
    },
    max_participants:{
        type:Number,
    },
    main_category:{
        type:String,
    },
    sub_category:{
        type:String,
    },
    start_date:{
        type:Date,
    },
    event_marks:{
        type:Number,
    },
    event_poster:{
        type:String,
    },
    link_to_event_details:{
        type:String,
    },
    intrested_students_more:[students_details],
 });
 const Admin_event=mongoose.model("Admineventscollections",userschema);
 module.exports=Admin_event;