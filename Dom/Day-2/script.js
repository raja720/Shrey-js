let body = document.querySelector("body");
let button = document.querySelector("button");

if(button){
   button.addEventListener("click",()=>{
      body.classList.toggle("dark-mode");
   })
}