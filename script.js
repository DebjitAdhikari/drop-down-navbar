const mainMenu=document.querySelector("i");
let dropMenu=document.querySelector(".dropmenu");
let isShown=false;
mainMenu.addEventListener("click",function(){
    !isShown?dropMenu.style.display="block":dropMenu.style.display="none";
    isShown=!isShown;
    mainMenu.classList.toggle("fa-xmark")
})