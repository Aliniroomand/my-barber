 // ________ there is  ... part in JS codes
 // 1-for first page and select gender
// 2-loading parts

 // 1-for first page and select gender:

 const selectManGender=document.querySelector(".choosing-at-first-men");
 const selectWomanGender=document.querySelector(".choosing-at-first-women");
 
 selectManGender.addEventListener("click",openSelectedGender);
 selectWomanGender.addEventListener("click",openSelectedGender);
 function openSelectedGender(event){
    const classOfSelected=event.target.className;
    console.log(event.target.className)
     if( classOfSelected === "choosing-at-first-men"){
        selectWomanGender.className=("dissapear-notchoosen-gender")  
        loadingMen.style.display="block"

        }
        if(classOfSelected === "choosing-at-first-women"){
            
         selectManGender.className=("dissapear-notchoosen-gender")  
         loadingWomen.style.display="block";

   
           }
}
//2-for loading
const loadingWomen=document.querySelector(".loading-women");
const loadingMen=document.querySelector(".loading-men");

