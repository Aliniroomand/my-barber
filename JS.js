 // ________ there is  ... part in JS codes
 // 1-for first page and select gender
// 2-loading parts

 // 1-for first page and select gender:

 const selectManGender=document.querySelector("#men-gender");
 const selectWomanGender=document.querySelector("#women-gender");

 selectManGender.addEventListener("click",openSelectedGender);
 selectWomanGender.addEventListener("click",openSelectedGender);

 function openSelectedGender(event){
    event 
    const ID=event.target.id;
     if(ID=== "men-gender"){
        event.target.classList=("dissapear-choose-gender")  
        
        console.log(image);
        }
        if(ID=== "women-gender"){
            
        event.target.classList="dissapear-choose-gender" 

   
           }
}
//2-for loading
const loadingMen=document.querySelector(".loading-title-men");
loadingMen.style.display="none";
console.log(loadingMen);
