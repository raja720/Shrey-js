let btn = document.querySelector("button");

let percent = document.querySelector("#percent");
let growth = document.querySelector("#growth")
let grow = 0;

btn.addEventListener("click",function(){
   let int = setInterval(() => {
    console.log(grow++);
    percent.innerHTML=grow +"%";
    growth.style.width=grow +"%"
    btn.innerHTML="Downloading"
   }, 50);
   setTimeout(() => {
    clearInterval(int)
    btn.innerHTML="Downloaded";
    btn.style.opacity= 0.5
}, 5000);
})
