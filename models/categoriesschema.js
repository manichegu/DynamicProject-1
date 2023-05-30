const mongoose=require("mongoose");
const minimini_schema=mongoose.Schema({
    number:{
        type:Number,
    },
    sub_category_name:{
        type:String,
    },
    max_marks:{
        type:Number,
    }
})
const mini_schema=mongoose.Schema({
    maincategory_name:{
        type:String,
    },
    related_subcategories_array:[minimini_schema]
})
const userschema=mongoose.Schema({
    maincategories_array:[mini_schema],
 });
 const User_categories=mongoose.model("Usercategoriescollections",userschema);
 module.exports=User_categories;