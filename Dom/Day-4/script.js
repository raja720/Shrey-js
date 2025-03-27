let btn = document.querySelector("button");
let h4 = document.querySelector("h4");
let check = 0

btn.addEventListener("click",function(){
    if(check == 0){
        h4.innerHTML="Request sending..."
        h4.style.color="olive"
        btn.innerHTML="Adding..."
       setTimeout(() => {
        h4.innerHTML="Friend"
        h4.style.color="green"
        btn.innerHTML="Remove Friend"
        check = 1
       }, 3000);
    }else{
        h4.innerHTML= "Stranger";
        h4.style.color= "red";
        btn.innerHTML= "Add friend"
        check = 0

    }
})