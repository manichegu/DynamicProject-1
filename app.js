const express=require("express");
const port=288;


const bodyparser=require("body-parser");
const mongoose=require("mongoose");
const multer=require("multer");
const path=require("path");
const localStorage=require("localStorage");
const User=require("./models/userschema.js");
const User_teacher=require("./models/userteacherschema.js");
const User_categories=require("./models/categoriesschema.js");
const User_admin=require("./models/useradminschema.js");
const Admin_event=require("./models/addeventschema.js");
const { Console } = require("console");
const app=express();
const hbs=require("hbs");
const { type } = require("os");



mongoose.set('strictQuery', false);

// use: hbs engine:
app.set('view engine', 'hbs');
const partialspath=path.join(__dirname,"./views/partials");
hbs.registerPartials(partialspath);
// to parse information:
app.use(bodyparser.urlencoded({extended:false}));



app.use("/static",express.static("static"));
app.use("/uploads",express.static("uploads"));

// middle ware:
var uploaded_filename;
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads")
    },
    filename:(req,file,cb)=>{
        console.log(file)
        // cb(null,file.originalname+path.extname(file.originalname))
        uploaded_filename=file.originalname;
        cb(null,file.originalname);
    },
});

const upload=multer({storage:storage});






var check_student="";
var check_teacher="";
var check_admin="";
var student_info="";
app.get("/",(req,res)=>{
    // res.send("this is home page")
    res.render("login");
})
app.post("/",async (req,res)=>{
    try{console.log(req.body.password);
        console.log(req.body.selectoption);
        // console.log("____________________");
        //     const new_User_categories=new User_categories({
        //         maincategories_array:[
        //             {
        //                 maincategory_name:"services",
        //                 related_subcategories_array:[
        //                     {
        //                         number:1,
        //                         sub_category_name:"Harithaharam /plantation",
        //                         max_marks:10,
        //                     },
        //                     {
        //                         number:2,
        //                         sub_category_name:"Participation in Relief camps",
        //                         max_marks:8,
        //                     },
        //                     {
        //                         number:3,
        //                         sub_category_name:"Blood donation /NSS or NCC participation",
        //                         max_marks:6,
        //                     },
        //                     {
        //                         number:4,
        //                         sub_category_name:"Blood donation /NSS camp organization",
        //                         max_marks:8,
        //                     },
        //                     {
        //                         number:5,
        //                         sub_category_name:"Training to under privileged Physically challenged",
        //                         max_marks:4,
        //                     },
        //                     {
        //                         number:6,
        //                         sub_category_name:"Community Service & Allied Activities",
        //                         max_marks:6,
        //                     },
        //                     {
        //                         number:7,
        //                         sub_category_name:"Rural Reporting",
        //                         max_marks:2,
        //                     }
        //                 ]
        //             },
        //             {
        //                 maincategory_name:"education",
        //                 related_subcategories_array:[
        //                     {
        //                         number:8,
        //                         sub_category_name:"MOOCs (SWAYAM/ NPTEL/ COURSERA/or equivalent)(12,8 weeks)",
        //                         max_marks:10,
        //                     },
        //                     {
        //                         number:9,
        //                         sub_category_name:"Tech Fest/ R&D Day/ Fresher’s Workshop/ Conference/ Hackathons etc(Organizer , Participant)",
        //                         max_marks:8,
        //                     },
        //                     {
        //                         number:10,
        //                         sub_category_name:"Participation in Debate/ Group Discussion/Technical Quiz ",
        //                         max_marks:6,
        //                     },
        //                     {
        //                         number:11,
        //                         sub_category_name:"Publication in News Paper, Magazines in institution level (Magazine / article/internet)(Editor , Writer)",
        //                         max_marks:8,
        //                     },
        //                     {
        //                         number:12,
        //                         sub_category_name:"Publication in News Paper, Magazine &Blogs",
        //                         max_marks:4,
        //                     },
        //                     {
        //                         number:13,
        //                         sub_category_name:"Research Publication (per publication)",
        //                         max_marks:6,
        //                     },
        //                     {
        //                         number:14,
        //                         sub_category_name:"Innovation Projects (other than courserequirements )",
        //                         max_marks:2,
        //                     },
        //                     {
        //                         number:15,
        //                         sub_category_name:"Student Chapter /Cubs",
        //                         max_marks:6,
        //                     },
        //                     {
        //                         number:16,
        //                         sub_category_name:"Self-Entrepreneurship Program </button>",
        //                         max_marks:12,
        //                     }
        //                 ]
        //             },
        //             {
        //                 maincategory_name:"co_cirricular",
        //                 related_subcategories_array:[
        //                     {
        //                         number:17,
        //                         sub_category_name:"Participation in Sports/Games(College level ,University level ,Region level ,State level ,National level)",
        //                         max_marks:10,
        //                     },
        //                     {
        //                         number:18,
        //                         sub_category_name:"Cultural Programme (Dance, Drama,Elocution, Music etc. )",
        //                         max_marks:8,
        //                     },
        //                     {
        //                         number:19,
        //                         sub_category_name:"Participation in Yoga camp",
        //                         max_marks:6,
        //                     },
        //                     {
        //                         number:20,
        //                         sub_category_name:"Photography activities in different Clubs(Photography club, Cine club)",
        //                         max_marks:8,
        //                     },
        //                     {
        //                         number:21,
        //                         sub_category_name:"Adventure sports with Certification ",
        //                         max_marks:4,
        //                     },
        //                     {
        //                         number:22,
        //                         sub_category_name:"Class Representative ",
        //                         max_marks:6,
        //                     },
        //                     {
        //                         number:23,
        //                         sub_category_name:"Member of Professional Society",
        //                         max_marks:2,
        //                     }
        //                 ]
        //             }
        //         ]
        // });
        // new_User_categories.save();
        // we can use any of the methods to go to another page:
        



var email="chegu.mani2020@gmail.com";
var sec="IT-2";
        if(req.body.selectoption=="students_login"){
        //       const new_userschema=new User({
        //     rollno:160121737105,
        //     name:req.body.name,
        //     password:req.body.password,
        //     current_sem:3,
        //     email:email,
        //     sec:sec,
        // });
        // console.log("hiee:"+new_userschema);
        // new_userschema.save();
    //     // we can use any of the methods to go to another page:
        // res.render("home");



        check_student=await User.findOne(({name:req.body.name}));  
        if(check_student.password===req.body.password)
        {
            console.log("correct login!!");
            console.log("id:"+check_student.id);

            res.redirect("/home");
        }
        else{
            console.log("wrong !!");
            res.redirect("/");
        }
        

        }else if(req.body.selectoption=="teachers_login"){
            console.log("haha");
        //           const new_userschema=new User_teacher({
        //     name:req.body.name,
        //     password:req.body.password,
        //     email:"kiranmie123@gmail.com",
        //     mobile_no:9032315262,
        //     students:[
        //         {
        //             name:"Ch.teja",
        //         },
        //         {
        //             name:"Ch.Srinith",
        //         },
        //         {
        //             name:"c",
        //         },
        //         {
        //             name:"d",
        //         }
        //     ]
        // });
        // new_userschema.save();
        // // we can use any of the methods to go to another page:
        // res.render("teacher_home");


            
     check_teacher=await User_teacher.findOne(({name:req.body.name}));  
    //  console.log(req.body.password);
     if(check_teacher.password===req.body.password)
     {
         console.log("correct login!!");
         console.log("id:"+check_teacher.id);
         localStorage.setItem("teacher_name",`${check_teacher.name}`);
         localStorage.setItem("teacher_id",`${check_teacher.id}`);
         console.log("students:"+check_teacher.students);
         res.redirect("/teacher_home");
     }
     else{
         console.log("wrong !!");
         res.redirect("/");
     }
     
        }
        else if(req.body.selectoption=="admins_login"){
            // console.log("haha");
            //           const new_userschema=new User_admin({
            //     name:req.body.name,
            //     password:req.body.password,
            //     email:"admin123@gmail.com",
            //     mobile_no:9032315262,
            // });
            // new_userschema.save();


            check_admin=await User_admin.findOne(({name:req.body.name}));  
        if(check_admin.password===req.body.password)
        {
            console.log("correct login!!");
            console.log("id:"+check_admin.id);

            res.redirect("/admin_home");
        }
        else{
            console.log("wrong login!!");
            res.redirect("/");
        }
        }
    



       
      }
    catch(error){
        console.log(error);
        // res.send("Incorrect Login or Password!!");
        res.redirect("/");
    }
})

// app.get("/teacher_home",(req,res)=>{
//     console.log("id:"+check_teacher._id);
//     console.log(check_teacher);
//     res.render("teacher_home.hbs",{data:check_teacher.students});
//     // const selected_category=require("./views/home.hbs");
//     // console.log(selected_category);
//     // if(selected_category=="1.Harithaharam /plantation"){
//     //     res.send("1.Harithaharam /plantatio");
//     // }



// })

app.get("/teacher_home",async(req,res)=>{
    // console.log("id:"+check_teacher._id);
    // console.log(check_teacher);
    // res.render("teacher_home.hbs",{data:check_teacher.students});
    // const selected_category=require("./views/home.hbs");
    // console.log(selected_category);
    // if(selected_category=="1.Harithaharam /plantation"){
    //     res.send("1.Harithaharam /plantatio");
    // }
    var students_info=[];
    var students_sem_wise_marks=[];
    var students_category_wise_marks=[];
    var students_total_marks=[];
    var students_total_noof_unverified_documents=[]
    // for(var l=0;l<check_teacher.students.length;l++){
    //     students[l]=check_teacher.students[l].name;
    // }
for(var l=0;l<check_teacher.students.length;l++){
    // console.log(check_teacher.students[l]);
    // var na="Ch.teja";
    // students=await User.findOne(({"name":na})); 
    // console.log(students_info.name+"..");
    
    // students_info[l]=await User.findOne(({"name":String(check_teacher.students[l].name)})); 
    students_info[l]=await User.findOne(({"rollno":Number(check_teacher.students[l].rollno)})); 
    console.log(students_info.length);
    console.log(students_info[l]);
    // console.log(typeof("Ch.teja"));

// console.log("id:"+students_info[l]._id);
const Userr_categories=await User_categories.findOne(({}));
// console.log(Userr_categories.maincategories_array[0]);
let i=0,j=0,k=0,total_points=0,sem_wise_marks=[00,00,00,00,00,00,00,00,00],category_wise_marks=[00,00,00,00];
// console.log(check.section.length);
for(i=0;i<students_info[l].section.length;i++){
    for(j=0;j<students_info[l].section[i].category.length;j++){
        for(k=0;k<students_info[l].section[i].category[j].sub_category.length;k++){
            if(students_info[l].section[i].category[j].sub_category[k].verificationstatus==true){
                total_points=total_points+students_info[l].section[i].category[j].sub_category[k].marks_alloted;
                if(students_info[l].section[i].category[j].main_category=="services"){
                    category_wise_marks[1]=category_wise_marks[1]+students_info[l].section[i].category[j].sub_category[k].marks_alloted;
                }else if(students_info[l].section[i].category[j].main_category=="education"){
                    category_wise_marks[2]=category_wise_marks[2]+students_info[l].section[i].category[j].sub_category[k].marks_alloted;
                }else if(students_info[l].section[i].category[j].main_category=="co_cirricular"){
                    category_wise_marks[3]=category_wise_marks[3]+students_info[l].section[i].category[j].sub_category[k].marks_alloted;
                }
                sem_wise_marks[students_info[l].section[i].sem]=sem_wise_marks[students_info[l].section[i].sem]+students_info[l].section[i].category[j].sub_category[k].marks_alloted;
            }
            
            // console.log("Total_points:"+check.section[i].category[j].sub_category[k].marks_alloted);
        }
    }
}


let total_noof_unverified_documents=0;
for(i=0;i<students_info[l].section.length;i++){
    for(j=0;j<students_info[l].section[i].category.length;j++){
        for(k=0;k<students_info[l].section[i].category[j].sub_category.length;k++){
            if(students_info[l].section[i].category[j].sub_category[k].verificationstatus==false){
                total_noof_unverified_documents=total_noof_unverified_documents+1;
            }
            
            // console.log("Total_points:"+check.section[i].category[j].sub_category[k].marks_alloted);
        }
    }
}




console.log("total_points:"+total_points);
console.log("sem_wise_marks:"+sem_wise_marks);
console.log("category_wise_marks:"+category_wise_marks);
console.log("total_noof_unverified_documents"+total_noof_unverified_documents);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>"+students_info[l].name);
// console.log()

students_sem_wise_marks[l]=sem_wise_marks;
students_category_wise_marks[l]=category_wise_marks;
students_total_marks[l]=total_points;
students_total_noof_unverified_documents[l]=total_noof_unverified_documents; 

}

console.log(students_sem_wise_marks);
console.log(students_category_wise_marks);
console.log(students_total_marks);
console.log(students_total_noof_unverified_documents);



res.render("teacher_home.hbs",{students_info:students_info,students_sem_wise_marks,students_category_wise_marks,students_total_marks,students_total_noof_unverified_documents});








//    check_student=await User.findOne(({name:check_student.name})); 
// console.log("id:"+check_student._id);
// const Userr_categories=await User_categories.findOne(({}));
// // console.log(Userr_categories.maincategories_array[0]);
// let i=0,j=0,k=0,total_points=0,sem_wise_marks=[0,0,0,0,0,0,0,0,0],category_wise_marks=[0,0,0,0];
// // console.log(check.section.length);
// for(i=0;i<check_student.section.length;i++){
//     for(j=0;j<check_student.section[i].category.length;j++){
//         for(k=0;k<check_student.section[i].category[j].sub_category.length;k++){
//             if(check_student.section[i].category[j].sub_category[k].verificationstatus==true){
//                 total_points=total_points+check_student.section[i].category[j].sub_category[k].marks_alloted;
//                 if(check_student.section[i].category[j].main_category=="services"){
//                     category_wise_marks[1]=category_wise_marks[1]+check_student.section[i].category[j].sub_category[k].marks_alloted;
//                 }else if(check_student.section[i].category[j].main_category=="education"){
//                     category_wise_marks[2]=category_wise_marks[2]+check_student.section[i].category[j].sub_category[k].marks_alloted;
//                 }else if(check_student.section[i].category[j].main_category=="co_cirricular"){
//                     category_wise_marks[3]=category_wise_marks[3]+check_student.section[i].category[j].sub_category[k].marks_alloted;
//                 }
//                 sem_wise_marks[check_student.section[i].sem]=sem_wise_marks[check_student.section[i].sem]+check_student.section[i].category[j].sub_category[k].marks_alloted;
//             }
            
//             // console.log("Total_points:"+check.section[i].category[j].sub_category[k].marks_alloted);
//         }
//     }
// }
// console.log("total_points:"+total_points);
// console.log("sem_wise_marks:"+sem_wise_marks);
// console.log("category_wise_marks:"+category_wise_marks);
// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>"+check_student.name);



// student_mentor=await User_teacher.findOne(({"students.name":check_student.name}));

// console.log(student_mentor.name);
// console.log(student_mentor.email);
// console.log(student_mentor.mobile_no);
// res.render("home",{data:Userr_categories,total_points:total_points,sem_wise_marks:sem_wise_marks,category_wise_marks:category_wise_marks,check_student:check_student,student_mentor:student_mentor});






})
















app.post("/teacher_home",async (req,res)=>{
//    console.log(localStorage.getItem("student_name"));
// var data=JSON.parse(localStorage.getItem("onclick_id"));
// console.log(data.station);
// console.log("student_name:"+localStorage.getItem("onclick_id"));
// console.log(localStorage);
console.log("student name:" + req.body.student_name);
check_student=await User.findOne(({"name":req.body.student_name})); 
res.redirect("/teacher_individual_page");
})
app.get("/teacher_individual_page",async (req,res)=>{
    // console.log("id:"+check._id);
    // console.log(check.section[0].category[0].main_category);
    // console.log(check.section[0].category[0].sub_category);
    check_student=await User.findOne(({"name":check_student.name})); 
    res.render("teacher_individual_page.hbs",{data:check_student});
    


   



    // const selected_category=require("./views/home.hbs");
    // console.log(selected_category);
    // if(selected_category=="1.Harithaharam /plantation"){
    //     res.send("1.Harithaharam /plantatio");
    // }
})
app.post("/teacher_individual_page",async (req,res)=>{
   
    console.log("feedback: "+req.body.feedback);
    console.log("marks alloted: "+req.body.marksalloted);
    console.log("sem: "+req.body.sem);
    console.log("main category: "+req.body.main_category);
    console.log("sub category: "+req.body.sub_category);
    console.log("check.name: "+check_student.name);


    //  await User.updateOne({"name":check.name,"password":check.password},{$set:{"section.$[o].category.$[i].sub_category.$[k].marksalloted":req.body.marksalloted,"section.$[o].category.$[i].sub_category.$[k].feedback":req.body.feedback,"section.$[o].category.$[i].sub_category.$[k].verificationstatus":true}},{arrayFilters:[{"o.sem":req.body.sem},{"i.main_category":student_selected_main_category},{"k.title":student_selected_sub_category}]});


    // await User.updateOne({"name":check.name,"password":check.password},{$set:{"section.$[o].category.$[i].main_category":"hiee"}},{arrayFilters:[{"o.sem":req.body.sem},{"i.main_category":"services"}]});

// .................
    await User.updateOne({"name":check_student.name,"password":check_student.password},{$set:{"section.$[o].category.$[i].sub_category.$[l].marks_alloted":req.body.marksalloted,"section.$[o].category.$[i].sub_category.$[l].verificationstatus":true,"section.$[o].category.$[i].sub_category.$[l].teacherfeedback":req.body.feedback}},{arrayFilters:[{"o.sem":req.body.sem},{"i.main_category":req.body.main_category},{"l.title":req.body.sub_category}]});

    res.redirect("/teacher_individual_page");
})




app.get("/home",async (req,res)=>{
    check_student=await User.findOne(({name:check_student.name})); 
    console.log("id:"+check_student._id);
    const Userr_categories=await User_categories.findOne(({}));
    // console.log(Userr_categories.maincategories_array[0]);
    let i=0,j=0,k=0,total_points=0,sem_wise_marks=[0,0,0,0,0,0,0,0,0],category_wise_marks=[0,0,0,0];
    // console.log(check.section.length);
    for(i=0;i<check_student.section.length;i++){
        for(j=0;j<check_student.section[i].category.length;j++){
            for(k=0;k<check_student.section[i].category[j].sub_category.length;k++){
                if(check_student.section[i].category[j].sub_category[k].verificationstatus==true){
                    total_points=total_points+check_student.section[i].category[j].sub_category[k].marks_alloted;
                    if(check_student.section[i].category[j].main_category=="services"){
                        category_wise_marks[1]=category_wise_marks[1]+check_student.section[i].category[j].sub_category[k].marks_alloted;
                    }else if(check_student.section[i].category[j].main_category=="education"){
                        category_wise_marks[2]=category_wise_marks[2]+check_student.section[i].category[j].sub_category[k].marks_alloted;
                    }else if(check_student.section[i].category[j].main_category=="co_cirricular"){
                        category_wise_marks[3]=category_wise_marks[3]+check_student.section[i].category[j].sub_category[k].marks_alloted;
                    }
                    sem_wise_marks[check_student.section[i].sem]=sem_wise_marks[check_student.section[i].sem]+check_student.section[i].category[j].sub_category[k].marks_alloted;
                }
                
                // console.log("Total_points:"+check.section[i].category[j].sub_category[k].marks_alloted);
            }
        }
    }
    console.log("total_points:"+total_points);
    console.log("sem_wise_marks:"+sem_wise_marks);
    console.log("category_wise_marks:"+category_wise_marks);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>"+check_student.name);



    student_mentor=await User_teacher.findOne(({"students.rollno":check_student.rollno}));

    // console.log(student_mentor.name);
    // console.log(student_mentor.email);
    // console.log(student_mentor.mobile_no);
    res.render("home",{data:Userr_categories,total_points:total_points,sem_wise_marks:sem_wise_marks,category_wise_marks:category_wise_marks,check_student:check_student,student_mentor:student_mentor});





    // const selected_category=require("./views/home.hbs");
    // console.log(selected_category);
    // if(selected_category=="1.Harithaharam /plantation"){
    //     res.send("1.Harithaharam /plantatio");
    // }
})

var student_selected_sub_category="";
var student_selected_sub_category_number;
var max_marks;
var student_selected_main_category;
app.post("/home",async (req,res)=>{
    // res.send(`${req.body.sub_category_name}`);
    console.log(`${req.body.sub_category_name}`)
    student_selected_sub_category_number=`${req.body.sub_category_name}`;
    res.redirect("/individual_page");


    // const student_category_details=await User.findOne(({name:req.body.name}))
// res.send()


    // console.log("id:"+check._id);
    // const Userr_categories=await User_categories.findOne(({}));
    // console.log(Userr_categories.maincategories_array[0]);
    // res.render("home",{data:Userr_categories});
    // const selected_category=require("./views/home.hbs");
    // console.log(selected_category);
    // if(selected_category=="1.Harithaharam /plantation"){
    //     res.send("1.Harithaharam /plantatio");
    // }
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    // await User.updateOne({"section.category.main_category":"fgj"},{$push:{"section.0.category.0.sub_category":{title:"hello1",marks_alloted:20}}});







    // console.log(check.section[0]._id);
    // console.log(User.findById(check.section[0]._id).sem +"sem");
    //    await User.findByIdAndUpdate(check._id, {$push:
    //     {section:{sem:2,category:{main_category:"hiee",sub_category:{title:"helloo",max_marks:10}}}}}, function(err, data) {
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //             res.send(data);
    //             console.log("Data updated!");
    //         }
    //     });  

        // const hiee=await User.findOneAndUpdate({"section.sem": 4},{"$push":
        //     {"section.category":{main_category:"hiee",sub_category:{title:"helloo"}}}}, function(err, data) {
        //         if(err){
        //             console.log(err);
        //         }
        //         else{
        //             res.send(data);
        //             console.log("Data updated!");
        //         }
        //     });  


        // User.findOneAndUpdate({"section.sem": 4},{$push:
        //     {section:{category:{main_category:"hiee",sub_category:{title:"helloo"}}}},function(err, data) {
        //             if(err){
        //                 console.log(err);
        //             }
        //             else{
        //                 res.send(data);
        //                 console.log("Data found!!");
        //         }}});  
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
})
app.get("/individual_page",async (req,res)=>{
    console.log(check_student);
const section=await User_categories.findOne({});
// console.log("."+section.maincategories_array.length);
for(var i=0;i<section.maincategories_array.length;i++){
    // console.log(".."+section.maincategories_array[i].related_subcategories_array.length);
    for(var j=0;j<section.maincategories_array[i].related_subcategories_array.length;j++){
        // console.log(section.maincategories_array[i].related_subcategories_array[j].number);
        if(section.maincategories_array[i].related_subcategories_array[j].number==student_selected_sub_category_number){
            console.log(section.maincategories_array[i].related_subcategories_array[j].sub_category_name);
            student_selected_sub_category=section.maincategories_array[i].related_subcategories_array[j].sub_category_name;
            max_marks=section.maincategories_array[i].related_subcategories_array[j].max_marks;
            student_selected_main_category=section.maincategories_array[i].maincategory_name;
            break;
        }
        
    }
}
    console.log("_______________________");
    // console.log(Userr_selected_category);
    // let Userr_selected_category=await User_categories.find((user) => {
    //     try {
    //     //   return user.address.city.includes('London');
    //     return user.maincategories_array.maincategory_name.includes("education");
    //     } catch {
    //       return false
    //     }
    //   });
    // for(var i=0;i<check.section.length;i++){
    //     console.log(check.section[i].category.length)
    //     // for(var j=0;j<check.section[i].category.length;i++){
            
    //     // }
    // }
      console.log("_______________________");
    // console.log(Userr_selected_category.maincategories_array);
    check_student=await User.findOne(({name:check_student.name})); 
    res.render("individual_page.hbs",{check_student:check_student,main_category:student_selected_main_category,student_selected_sub_category:student_selected_sub_category,max_marks:max_marks,check:check_student});
});
app.post("/individual_page",upload.single("image"),async(req,res)=>{
    try {
        console.log("sem:"+req.body.sem);
        console.log("file_name",uploaded_filename);
        console.log("image uploaded successfully");
        console.log(student_selected_main_category);
     
     
     //    await User.updateOne({"section.category.main_category":"fgj"},{$push:{"section.0.category.0.sub_category":{title:"hello1",marks_alloted:20}}});
     
     
         //    User.findByIdAndUpdate(check._id, {$push:
         //     {section:{sem:req.body.sem,category:{main_category:student_selected_main_category,sub_category:{title:student_selected_sub_category,max_marks:max_marks,uploadeddocument:uploaded_filename}}}}}, function(err, data) {
         //         if(err){
         //             console.log(err);
         //         }
         //         else{
         //             res.send(data);
         //             console.log("Data updated!");
         //         }
         //     });  
     
     
         // const hiee=await User.findOneAndUpdate({"section.sem": 2}, {$set: {"section.$": {sem:10}}});
         // console.log(hiee);

     
         var sem_found_status=0;
         var sem_found_index;
         var main_category_found_status=0;
         var main_category_found_index;
         var sub_category_found_status=0;
         var sub_category_found_index;
             console.log("length  :"+check_student.section.length);
             for(var i=0;i<check_student.section.length;i++){
                 if(check_student.section[i].sem==req.body.sem){
                     sem_found_status=1;
                     sem_found_index=i;
                     break;
                 }
             }
             console.log("sem_found_status:"+sem_found_status);
         if(sem_found_status==1)
         {
             console.log("sem :"+req.body.sem+" found!!" );
             console.log(check_student.section[sem_found_index].category.length);
             for(var i=0;i<check_student.section[sem_found_index].category.length;i++){
                 if(check_student.section[sem_found_index].category[i].main_category==student_selected_main_category){
                     console.log("main category :"+student_selected_main_category+" found!!" );
                     main_category_found_status=1;
                     main_category_found_index=i;
                     break;
                 }
             }
             console.log("main_category_found_status:"+main_category_found_status);
             if(main_category_found_status==1)
             {
                 // console.log(check.section[sem_found_index].category[main_category_found_index].sub_category.length);
                 for(var i=0;i<check_student.section[sem_found_index].category[main_category_found_index].sub_category.length;i++){
                     if(check_student.section[sem_found_index].category[main_category_found_index].sub_category[i].title==student_selected_sub_category){
                         sub_category_found_status=1;
                         sub_category_found_index=i;
                         break;
                     }
                 }
                 if(sub_category_found_status==1 && check_student.section[sem_found_index].category[main_category_found_index].sub_category[sub_category_found_index].verificationstatus==true){
                     // if verified
                     // var query="section.0.category.0.sub_category"
                     console.log(" already verified cannot be changed!!");
                 }else if(sub_category_found_status==1 && check_student.section[sem_found_index].category[main_category_found_index].sub_category[sub_category_found_index].verificationstatus==false){
                     console.log(" not verified can be changed haha!!");
                     await User.updateOne({"name":check_student.name,"password":check_student.password},{$set:{"section.$[o].category.$[i].sub_category":{title:student_selected_sub_category,max_marks:max_marks,uploadeddocument:uploaded_filename}}},{arrayFilters:[{"o.sem":req.body.sem},{"i.main_category":student_selected_main_category}]});
                     // alert("helloo");
                 }else if(sub_category_found_status==0){
                     console.log("sub category is not found  !!");
                     // await User.updateOne({"name":check.name,"password":check.password,"section.sem":req.body.sem,"section.category.main_category":student_selected_main_category},{$push:{query:{
                     //     main_category:student_selected_main_category,sub_category:{title:req.body.name,max_marks:max_marks,uploadeddocument:uploaded_filename}
                     // }}},function(err, data) {
                     //     if(err){
                     //         console.log(err);
                     //     }
                     //     else{
                     //         res.send(data);
                     //         console.log("Data updated!");
                     //     }
                     // });
                     await User.updateOne({"name":check_student.name,"password":check_student.password},{$push:{"section.$[o].category.$[i].sub_category":{title:student_selected_sub_category,max_marks:max_marks,uploadeddocument:uploaded_filename}}},{arrayFilters:[{"o.sem":req.body.sem},{"i.main_category":student_selected_main_category}]});
      
                 }
     
             }
             else if(main_category_found_status==0){
                 // var query=`section.${sem_found_index}.category`;
                 // var query="section.0.category";
                 // query=toString(query);
                 // console.log("query : "+query);
                 // var query = { address: "Park Lane 38" };
                 console.log("main category :"+student_selected_main_category+" not found!!" );
                 await User.updateOne({"name":check_student.name,"password":check_student.password,"section.sem":req.body.sem},{$push:{"section.$.category":{
                     main_category:student_selected_main_category,sub_category:{title:student_selected_sub_category,max_marks:max_marks,uploadeddocument:uploaded_filename}
                 }
     
                 }});
             }
         }
         else if(sem_found_status==0){
             console.log("sem :"+req.body.sem+" not found!!" );
            //  await User.findByIdAndUpdate(check_student._id, {$push:
            //  {section:{sem:req.body.sem,category:{main_category:student_selected_main_category,sub_category:{title:student_selected_sub_category,max_marks:max_marks,uploadeddocument:uploaded_filename}}}}}, function(err, data) {
            //      if(err){
            //          console.log(err);
            //      }
            //      else{
            //         //  res.send(data);
            //          console.log("Data updated!");
            //      }
            //  });  


             await User.updateOne({"name":check_student.name,"password":check_student.password},{$push:
                {section:{sem:req.body.sem,category:{main_category:student_selected_main_category,sub_category:{title:student_selected_sub_category,max_marks:max_marks,uploadeddocument:uploaded_filename}}}}});
                console.log("Data updated!");
     
         }
      } 
      catch (error)
       {
        
        // return next(error)
        console.log(error);
      }








  
    await res.redirect("/home");
    // for(var i=0;i<check.section.length)
    
});
app.get("/your_uploads_unverified",async (req,res)=>{
    // console.log("id:"+check._id);
    // console.log(check.section[0].category[0].main_category);
    // console.log(check.section[0].category[0].sub_category);
    check_student=await User.findOne(({name:check_student.name})); 
    for(var i=0;i<check_student.section.length;i++){
        for(var j=0;j<check_student.section[i].category.length;j++){
            for(var k=0;k<check_student.section[i].category[j].sub_category.length;k++){
                console.log(check_student.section[i].category[j].sub_category[k]._id);
            }
        }
    }









    
    res.render("your_uploads_unverified.hbs",{data:check_student});
    


   



    // const selected_category=require("./views/home.hbs");
    // console.log(selected_category);
    // if(selected_category=="1.Harithaharam /plantation"){
    //     res.send("1.Harithaharam /plantatio");
    // }
});
app.post("/your_uploads_unverified",async (req,res)=>{
    // console.log("id:"+check._id);
    // console.log(check.section[0].category[0].main_category);
    // console.log(check.section[0].category[0].sub_category);
    // res.render("your_uploads_unverified.hbs",{data:check});
    // console.log("main")

    // await User.updateOne({"name":check_student.name,"password":check_student.password},{$push:{"section.$[o].category.$[i].sub_category":{title:student_selected_sub_category,max_marks:max_marks,uploadeddocument:uploaded_filename}}},{arrayFilters:[{"o.sem":req.body.sem},{"i.main_category":student_selected_main_category}]});
    var sem_found_status=0;
    var sem_found_index;
    var main_category_found_status=0;
    var main_category_found_index;
    var sub_category_found_status=0;
    var sub_category_found_index;

console.log("name:"+check_student.name);
console.log("password:"+check_student.password);
console.log("sem:",req.body.sem);
console.log("sub category:",req.body.sub_category);

for(var i=0;i<check_student.section.length;i++){
    if(check_student.section[i].sem==req.body.sem){
        sem_found_status=1;
        sem_found_index=i;
        break;
    }
    
}
if(sem_found_status==1){
    console.log("sem :"+req.body.sem+" found!!" );
    console.log(check_student.section[sem_found_index].category.length);
    for(var i=0;i<check_student.section[sem_found_index].category.length;i++){
        if(check_student.section[sem_found_index].category[i].main_category==req.body.main_category){
            main_category_found_status=1;
            main_category_found_index=i;
            break;
        }
    }
    if(main_category_found_status==1){
        console.log("main category :"+req.body.main_category+" found!!" );
        for(var i=0;i<check_student.section[sem_found_index].category[main_category_found_index].sub_category.length;i++){
            console.log(check_student.section[sem_found_index].category[main_category_found_index].sub_category[i].title);
            if(check_student.section[sem_found_index].category[main_category_found_index].sub_category[i].title==req.body.sub_category){
                sub_category_found_status=1;
                sub_category_found_index=i;
                break;
            }
            
        }
        if(sub_category_found_status==1)
        {
            console.log("sub category :"+req.body.sub_category+" found!!" );
            await User.updateOne({"name":check_student.name,"password":check_student.password},{$pull:{"section.$[o].category.$[i].sub_category":{title:req.body.sub_category}}},{arrayFilters:[{"o.sem":req.body.sem},{"i.main_category":req.body.main_category}]});
            console.log("document deleted succesfully!!");
            res.redirect("/your_uploads_unverified");
        }
        else{
            console.log("Not found the subcategory !!");
        }
        
    }
    else{
        console.log("Not found the maincategory !!");
    }
}
else{
    console.log("Not found the sem !!");
}

    // const selected_category=require("./views/home.hbs");
    // console.log(selected_category);
    // if(selected_category=="1.Harithaharam /plantation"){
    //     res.send("1.Harithaharam /plantatio");
    // }
});
app.get("/your_uploads_verified",async (req,res)=>{
    // console.log("id:"+check._id);
    // console.log(check.section[0].category[0].main_category);
    // console.log(check.section[0].category[0].sub_category);
    check_student=await User.findOne(({name:check_student.name})); 
    res.render("your_uploads_verified.hbs",{data:check_student});
    


   



    // const selected_category=require("./views/home.hbs");
    // console.log(selected_category);
    // if(selected_category=="1.Harithaharam /plantation"){
    //     res.send("1.Harithaharam /plantatio");
    // }
})







// app.get("/services",(req,res)=>{
//     // const onclick_id=require("./static/js/home.js");
//     res.render("individual_page.hbs");
// })
// app.post("/services",async (req,res)=>{
//     // const onclick_id=require("./static/js/home.js");
//     // res.render("individual_page.hbs");

//     // const sub_check_array=await User.findOne({"array.s1":"helloo"})
//     console.log(check.array[0]._id);
//     User.findByIdAndUpdate(check._id, {$push:
//         {array:{ s1:req.body.s1text},section:{sem:req.body.sem,category:{main_category:req.body.main_category,sub_category:{title:req.body.sub_category,marks_alloted:req.body.marksalloted}}}}}, function(err, data) {
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 res.send(data);
//                 console.log("Data updated!");
//             }
//         });  


//     // const query = { name: "practise" };
//     // const updateDocument = {
//     //   $set: { "array.$.s1": `${req.body.s1text}` }
//     // };
//     // const result = await .updateOne(query, updateDocument);
//     // res.send(result); 
//     // console.log("Data updated!");

// })


// app.get("/education",(req,res)=>{
//     // const onclick_id=require("./static/js/home.js");
//     res.render("individual_page.hbs");
// })

// app.get("/co_cirricular",(req,res)=>{
//     // const onclick_id=require("./static/js/home.js");
//     res.render("individual_page.hbs");
// })













app.get("/admin_home",async (req,res)=>{
    //    console.log(localStorage.getItem("student_name"));
    // var data=JSON.parse(localStorage.getItem("onclick_id"));
    // console.log(data.station);
    // console.log("student_name:"+localStorage.getItem("onclick_id"));
    // console.log(localStorage);
    // console.log("student name:" + req.body.student_name);
    // check_student=await User.findOne(({"name":req.body.student_name})); 


    const Userr_categories=await User_categories.findOne(({}));
    res.render("addevents_page",{data:Userr_categories,services:Userr_categories.maincategories_array[0],education:Userr_categories.maincategories_array[1],co_cirricular:Userr_categories.maincategories_array[2]});
});

app.post("/admin_home",upload.single("image"),async (req,res)=>{
    console.log("haha");
    console.log(uploaded_filename);
var sub_category_selected_marks;
    const Userr_categories=await User_categories.findOne(({}));
    for(var i=0;i<Userr_categories.maincategories_array.length;i++){
        if(Userr_categories.maincategories_array[i].maincategory_name==req.body.selectoption_main_category){
            for(var j=0;j<Userr_categories.maincategories_array[i].related_subcategories_array.length;j++){
                if(Userr_categories.maincategories_array[i].related_subcategories_array[j].sub_category_name==req.body.selectoption_sub_category){
                    sub_category_selected_marks=Userr_categories.maincategories_array[i].related_subcategories_array[j].max_marks;
                    break;
                }
            }
            break;
        }
    }
    console.log(req.body.event_name);
    console.log("sub_category_selected_marks:"+sub_category_selected_marks);
            const new_userschema=new Admin_event({
                event_name:req.body.event_name,
                max_participants:req.body.max_participants,
                main_category:req.body.selectoption_main_category,
                sub_category:req.body.selectoption_sub_category,
                start_date:req.body.Event_Start_date,
                event_marks:sub_category_selected_marks,
                event_poster:uploaded_filename,
                link_to_event_details:req.body.Event_link,
            });
            new_userschema.save();

    res.redirect("/admin_home");        

});




app.get("/admin_addstudent",async (req,res)=>{
    //    console.log(localStorage.getItem("student_name"));
    // var data=JSON.parse(localStorage.getItem("onclick_id"));
    // console.log(data.station);
    // console.log("student_name:"+localStorage.getItem("onclick_id"));
    // console.log(localStorage);
    // console.log("student name:" + req.body.student_name);
    // check_student=await User.findOne(({"name":req.body.student_name})); 


    const Userr_categories=await User_categories.findOne(({}));
    res.render("addstudents_page");
});

app.post("/admin_addstudent",async (req,res)=>{
    console.log("haha");
           const new_userschema=new User({
            rollno:req.body.rollno,
            name:req.body.name,
            password:req.body.password,
            current_sem:req.body.sem,
            email:req.body.email,
            sec:req.body.sec,
        });
        // console.log("hiee:"+new_userschema);
        new_userschema.save();
    res.redirect("admin_addstudent");        

});



app.get("/admin_addmentor",async (req,res)=>{
    //    console.log(localStorage.getItem("student_name"));
    // var data=JSON.parse(localStorage.getItem("onclick_id"));
    // console.log(data.station);
    // console.log("student_name:"+localStorage.getItem("onclick_id"));
    // console.log(localStorage);
    // console.log("student name:" + req.body.student_name);
    // check_student=await User.findOne(({"name":req.body.student_name})); 


    const Userr_categories=await User_categories.findOne(({}));
    res.render("addmentors_page");
});

app.post("/admin_addmentor",async (req,res)=>{
    console.log("haha");
    var studentsundermentor=[];
    for(var i=req.body.startrollno;i<=req.body.endrollno;i++)
    {
        studentsundermentor.push({
                        rollno:Number(i),
                    });
    }
    console.log(studentsundermentor);
           const new_userschema=new User_teacher({
            name:req.body.name,
            password:req.body.password,
            mobile_no:req.body.mobileno,
            email:req.body.email,
            students:studentsundermentor,
        });
        // console.log("hiee:"+new_userschema);
        new_userschema.save();
    res.redirect("admin_addmentor");        

});





app.get("/events",async (req,res)=>{
   const Events=await Admin_event.find(({}));
   const totalnoofevents=Events.length;
   console.log("length...........................:"+Events.length);
check_student=await User.findOne(({name:check_student.name})); 
// console.log(check_student);
   res.render("events_page",{data:Events,check_student:check_student,totalnoofevents:totalnoofevents});
});
var selected_event;
app.post("/events",async (req,res)=>{
    var action=req.body.action;
    if(action=="findinterest_submit"){
        selected_event=req.body.event_name;
        res.redirect("/individualevents_interestedprofiles");
    }
    else if(action=="interest_submit")
    {
   console.log(req.body.event_name);
   const Event_interested=await Admin_event.findOne(({event_name:req.body.event_name}));
   console.log("Event_interested:"+Event_interested);
check_student=await User.findOne(({name:check_student.name})); 
console.log(check_student);
var student_interest=0;
for(var i=0;i<Event_interested.intrested_students_more.length;i++){
    console.log(Event_interested.intrested_students_more[i].rollno);
    if(check_student.rollno==Event_interested.intrested_students_more[i].rollno){
        console.log("removing interest!!");
        student_interest=1;
        break;
    }
    // else 
}
if(student_interest==1){
    await Admin_event.updateOne({event_name:req.body.event_name},{$pull:
        {"intrested_students_more":{"rollno":check_student.rollno}}});
        console.log("Data updated!");
}
else if(student_interest==0){
    await Admin_event.updateOne({event_name:req.body.event_name},{$push:
        {"intrested_students_more":{"rollno":check_student.rollno}}});
        console.log("Data updated!");
}

res.redirect("/events");
}
});

app.get("/individualevents_interestedprofiles",async (req,res)=>{
    const Events=await Admin_event.find(({}));
    const Event_interested=await Admin_event.findOne(({event_name:selected_event}));
    // for(var i=0;i<Event_interested.intrested_students_more.length;i++){
    //     console.log(Event_interested.intrested_students_more[i].rollno);
    //     if(check_student.rollno==Event_interested.intrested_students_more[i].rollno){
    //         console.log("removing interest!!");
    //         student_interest=1;
    //         break;
    //     }
    // }


    var students_info=[];
    var students_sem_wise_marks=[];
    var students_category_wise_marks=[];
    var students_total_marks=[];
    var students_total_noof_unverified_documents=[]
    // for(var l=0;l<check_teacher.students.length;l++){
    //     students[l]=check_teacher.students[l].name;
    // }
for(var l=0;l<Event_interested.intrested_students_more.length;l++){
    // console.log(check_teacher.students[l]);
    // var na="Ch.teja";
    // students=await User.findOne(({"name":na})); 
    // console.log(students_info.name+"..");
    
    // students_info[l]=await User.findOne(({"name":String(check_teacher.students[l].name)})); 
    students_info[l]=await User.findOne(({"rollno":Number(Event_interested.intrested_students_more[l].rollno)})); 
    console.log(students_info.length);
    console.log(students_info[l]);
    // console.log(typeof("Ch.teja"));

// console.log("id:"+students_info[l]._id);
const Userr_categories=await User_categories.findOne(({}));
// console.log(Userr_categories.maincategories_array[0]);
let i=0,j=0,k=0,total_points=0,sem_wise_marks=[00,00,00,00,00,00,00,00,00],category_wise_marks=[00,00,00,00];
// console.log(check.section.length);
for(i=0;i<students_info[l].section.length;i++){
    for(j=0;j<students_info[l].section[i].category.length;j++){
        for(k=0;k<students_info[l].section[i].category[j].sub_category.length;k++){
            if(students_info[l].section[i].category[j].sub_category[k].verificationstatus==true){
                total_points=total_points+students_info[l].section[i].category[j].sub_category[k].marks_alloted;
                if(students_info[l].section[i].category[j].main_category=="services"){
                    category_wise_marks[1]=category_wise_marks[1]+students_info[l].section[i].category[j].sub_category[k].marks_alloted;
                }else if(students_info[l].section[i].category[j].main_category=="education"){
                    category_wise_marks[2]=category_wise_marks[2]+students_info[l].section[i].category[j].sub_category[k].marks_alloted;
                }else if(students_info[l].section[i].category[j].main_category=="co_cirricular"){
                    category_wise_marks[3]=category_wise_marks[3]+students_info[l].section[i].category[j].sub_category[k].marks_alloted;
                }
                sem_wise_marks[students_info[l].section[i].sem]=sem_wise_marks[students_info[l].section[i].sem]+students_info[l].section[i].category[j].sub_category[k].marks_alloted;
            }
            
            // console.log("Total_points:"+check.section[i].category[j].sub_category[k].marks_alloted);
        }
    }
}


let total_noof_unverified_documents=0;
for(i=0;i<students_info[l].section.length;i++){
    for(j=0;j<students_info[l].section[i].category.length;j++){
        for(k=0;k<students_info[l].section[i].category[j].sub_category.length;k++){
            if(students_info[l].section[i].category[j].sub_category[k].verificationstatus==false){
                total_noof_unverified_documents=total_noof_unverified_documents+1;
            }
            
            // console.log("Total_points:"+check.section[i].category[j].sub_category[k].marks_alloted);
        }
    }
}




console.log("total_points:"+total_points);
console.log("sem_wise_marks:"+sem_wise_marks);
console.log("category_wise_marks:"+category_wise_marks);
console.log("total_noof_unverified_documents"+total_noof_unverified_documents);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>"+students_info[l].name);
// console.log()

students_sem_wise_marks[l]=sem_wise_marks;
students_category_wise_marks[l]=category_wise_marks;
students_total_marks[l]=total_points;
students_total_noof_unverified_documents[l]=total_noof_unverified_documents; 

}

console.log(students_sem_wise_marks);
console.log(students_category_wise_marks);
console.log(students_total_marks);
console.log(students_total_noof_unverified_documents);



// res.render("teacher_home.hbs",{students_info:students_info,students_sem_wise_marks,students_category_wise_marks,students_total_marks,students_total_noof_unverified_documents});


    // res.render("events_individual_page",{data:Events,check_student:check_student,totalnoofevents:totalnoofevents});
    res.render("events_individual_page.hbs",{students_info:students_info,students_sem_wise_marks,students_category_wise_marks,students_total_marks,students_total_noof_unverified_documents});
 });





const url = `mongodb+srv://manikanta_chegu:Chegu2003@cluster0.eo0dz9k.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true ,
    useFindAndModify:false,
    connectTimeoutMS: 30000,
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.listen(port,()=>{
    console.log(`listening to the port:${port}`);
})