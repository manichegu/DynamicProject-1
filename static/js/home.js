var selected_category="";
var onclick_id="";
 //const Services=document.getElementById("services_btn");
 services_btn.addEventListener("click",fn_services);
  education_btn.addEventListener("click",fn_education);
   co_cirricular_btn.addEventListener("click",fn_co_cirricular);
  function fn_services(){

      if(services_btn.src=="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"){
             services_btn.src="http://www.clker.com/cliparts/z/z/h/C/V/5/up-white-arrow-hi.png"
             let appendText=document.createElement("div");
             appendText.id="appendText_services";
             appendText.innerHTML=`<button id="I" class="">1.Harithaharam /plantation </button>
 <button id="II" class="">2.Participation in Relief camps</button>
 <button id="III" class="">3.Blood donation /NSS or NCC participation</button>
 <button id="IV"  class="">4.Blood donation /NSS camp organization</button>
 <button id="V" class="">5.Training to under privileged Physically challenged</button>
 <button id="VI" class="">6.Community Service & Allied Activities</button>
 <button id="VII" class="">7.Rural Reporting</button>`;
            services.append(appendText);
         }
         else if(services_btn.src="http://www.clker.com/cliparts/z/z/h/C/V/5/up-white-arrow-hi.png"){
             services_btn.src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"
             appendText_services.remove();
         }
      for(nodel of services.children){
                console.log(nodel);
                var i=0;
           for(i=0;i<nodel.children.length;i++){
                //console.log(nodel.children[i].id);
                // console.log(nodel.children[i].textContent);
                const idd=document.getElementById(nodel.children[i].id);
                //console.log(idd);
                idd.addEventListener("click",(e)=>{
                console.log(e.target.id);
                onclick_id=e.target.id;
                localStorage.setItem("onclick_id", "Services");
                // module.exports={onclick_id:`${onclick_id}`};
                window.location="/services";


             });
             //  querySelector(`${nodel.children[i].id}`);  
         }
       }

 }
//  module.exports = {onclick_id};
//  module.exports={hello:"hiee"};
 
  function fn_education(){

      if(education_btn.src=="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"){
             education_btn.src="http://www.clker.com/cliparts/z/z/h/C/V/5/up-white-arrow-hi.png"
             let appendText=document.createElement("div");
             appendText.id="appendText_education";
             appendText.innerHTML=`
 <button id="VIII" class="">1.MOOCs (SWAYAM/ NPTEL/ COURSERA/or equivalent)(12,8 weeks)</button>
 <button id="IX" class="">
   2.Tech Fest/ R&D Day/ Fresher’s Workshop/ Conference/ Hackathons etc(Organizer , Participant)</button>
 <button id="X" class="">
   3.Participation in Debate/ Group Discussion/Technical Quiz </button>
 <button id="XI" class="">4.Publication in News Paper, Magazines in institution level (Magazine / article/internet)(Editor , Writer)</button>
 <button id="XII" class="">5.Publication in News Paper, Magazine &Blogs</button>
 <button id="XIII" class="">
   6.Research Publication (per publication) </button>
 <button  id="XIV" class="">7.Innovation Projects (other than courserequirements )</button>
 <button id="XV" class="">8.Student Chapter /Cubs </button>
 <button  id="XVI" class="">
   9.Relevant Industry Visit & Report</button>
 <button  id="XVII" class="">
   10.Self-Entrepreneurship Program </button>`;
            education.append(appendText);
         }
         else if(education_btn.src="http://www.clker.com/cliparts/z/z/h/C/V/5/up-white-arrow-hi.png"){
             education_btn.src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"
             appendText_education.remove();
         }
          for(nodel of education.children){
                console.log(nodel);
                var i=0;
           for(i=0;i<nodel.children.length;i++){
                //console.log(nodel.children[i].id);
                // console.log(nodel.children[i].textContent);
                const idd=document.getElementById(nodel.children[i].id);
                //console.log(idd);
                idd.addEventListener("click",(e)=>{
                console.log(e.target.id);
                localStorage.setItem("main_category", "Education");
                localStorage.setItem("sub_category", `${e.target.id}`);
                // module.exports={onclick_id:`${onclick_id}`};
                window.location="/education";
             });
             //  querySelector(`${nodel.children[i].id}`);  
         }
       }
 }
  function fn_co_cirricular(){

      if(co_cirricular_btn.src=="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"){
             co_cirricular_btn.src="http://www.clker.com/cliparts/z/z/h/C/V/5/up-white-arrow-hi.png"
             let appendText=document.createElement("div");
             appendText.id="appendText_co_cirricular";
             appendText.innerHTML=`<button id="XVIII" class="">1.Participation in Sports/Games(College level ,University level ,Region level ,State level ,National level)</button>
 <button id="XIX" class="">2.Cultural Programme (Dance, Drama,Elocution, Music etc. )</button>
 <button id="XX" class="">3.Participation in Yoga camp</button>
 <button id="XXI" class="">4.Photography activities in different Clubs(Photography club, Cine club)</button>
 <button id="XXII" class="">5.Adventure sports with Certification </button>
 <button id="XXIII" class="">6.Class Representative </button>
 <button id="XXIV" class="">7.Member of Professional Society</button>`;
            co_cirricular.append(appendText);
         }
         else if(co_cirricular_btn.src="http://www.clker.com/cliparts/z/z/h/C/V/5/up-white-arrow-hi.png"){
             co_cirricular_btn.src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"
             appendText_co_cirricular.remove();
         }
          for(nodel of co_cirricular.children){
                console.log(nodel);
                var i=0;
           for(i=0;i<nodel.children.length;i++){
                //console.log(nodel.children[i].id);
                // console.log(nodel.children[i].textContent);
                const idd=document.getElementById(nodel.children[i].id);
                //console.log(idd);
                idd.addEventListener("click",(e)=>{
                console.log(e.target.id);
                localStorage.setItem("onclick_id", "co_cirricular");
                // module.exports={onclick_id:`${onclick_id}`};
                window.location="/co_cirricular";

             });
             //  querySelector(`${nodel.children[i].id}`);  
         }
       }
 }