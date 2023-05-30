const mongoose=require("mongoose");
const ImageSchema=mongoose.Schema({
    image:{
        data:Buffer,
        contentType:String
    }
});
const UserImageSchema=mongoose.model("Userimagecollections",ImageSchema);
module.exports=UserImageSchema;