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

     if( classOfSelected === "choosing-at-first-men"){
        selectWomanGender.className=("dissapear-notchoosen-gender")  
        loadingMen.style.display="flex";
        loadingMen.style.animation=" goAndDisappear 3s linear forwards";


        }
        if(classOfSelected === "choosing-at-first-women"){
         selectManGender.className=("dissapear-notchoosen-gender") ;
        loadingMen.innerHTML=
        `<figure class="loading-men" style= "animation:goAndDisappear 3s linear forwards;display: flex;" >
            <img src="./images/loading animated/women-loading.gif" class="animateForLoading-men"  alt="men-loading">
            <h2 class="loading-title" style="text-shadow: 2px 2px 5px red,-2px -2px 5px red;z-index: 10;color: rgba(0, 0, 0, 0.795);">loading</h2> 
         </figure>`;
        loadingMen.style.display="flex";

           }
         }      
           //2-for loading
const loadingMen=document.querySelector(".loading-men");

