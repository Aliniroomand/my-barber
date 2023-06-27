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
        console.log(selectManGender.className)

        }
        if(classOfSelected === "choosing-at-first-women"){
            
         selectManGender.className=("dissapear-notchoosen-gender")  

   
           }
}
//2-for loading
const loadingMen=document.querySelector(".loading-title-men");
loadingMen.style.display="none";

