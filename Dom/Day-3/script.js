// let btn = document.querySelector("button");
// let box = document.querySelector(".box");

// btn.addEventListener("click",function(){
//     let c1 = Math.floor(Math.random()*256);
//     let c2 = Math.floor(Math.random()*256);
//     let c3 = Math.floor(Math.random()*256);
//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
//     btn.style.color = `rgb(${c1},${c2},${c3})`
// })

// let btn = document.querySelector("button");
// let h5 = document.querySelector("h5");

// let check = 0;

// btn.addEventListener("click",function(){
//     if(check== 0){
//         h5.innerHTML= "Friend";
//         h5.style.color="green"
//         btn.innerHTML = "Remove Friend"
//         btn.style.backgroundColor = "green"
//         check = 1;
//     }else{
//         h5.innerHTML= "Stranger";
//         h5.style.color="red"
//         btn.innerHTML = "Add Friend"
//         btn.style.backgroundColor = "white"
//         check = 0;
//     }
// })


let arr = [ 
    {team:'CSK',
        primary:'yellow',
        secondary:'pink'
    },
    {team:'RCB',
        primary:'red',
        secondary:'black'
    },
    {team:'MI',
        primary:'green',
        secondary:'orange'
    }, 
    {team:'TTW',
        primary:'red',
        secondary:'wheat'
    },

    ];
 


let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let num = Math.floor(Math.random()*arr.length);
    let ran = arr[num]
    console.log(ran);
    h1.innerHTML=ran.team;
    h1.style.backgroundColor=ran.primary;
})
