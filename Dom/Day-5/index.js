// let h1 = document.querySelector("h1");

//  let att = h1.getAttribute("id");
//  console.log(att);
//  let stt = h1.setAttribute("id","heroine")
//  console.log(stt);

// let img1 = document.querySelector("#img1");
// let img2 = document.querySelector("#img2");
// let btn = document.querySelector("button")

// btn.addEventListener('click',function(){
//     let img1src = img1.getAttribute("src")
//     let img2src = img2.getAttribute("src")

//     img1.setAttribute("src" ,img2src)
//     img2.setAttribute("src", img1src)
// })
 

// let h1 = document.createElement("h1");

// h1.innerHTML = "i am from js"

// let body = document.querySelector("body")
// body.appendChild(h1)

let btn = document.querySelector("button");
let body = document.querySelector("body");

btn.addEventListener("click", function(){


    let x = Math.random()*90;
    let y = Math.random()*90;
    let rot = Math.random()*360;;

    let img = document.createElement("img");
    img.setAttribute("src" , "https://images.unsplash.com/photo-1735825764460-c5dec05d6253?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8")
    img.style.height = "200px"
    img.style.position = "absolute"
    img.style.left = x +"%"
    img.style.top = y +"%"
    img.style.rotate = rot +'deg'



    body.appendChild(img)



})





