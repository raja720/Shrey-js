//  let arr = ["Raja","Rahul","linkaa","ramm","Golu","navin","ritik"];

//  arr.forEach(function(elem, index){
//     console.log(`Hello ${elem} ${index}`);
//  })

const arr = [
  {
    user: "Ravi",
    age: 25,
    city: "Delhi",
    isStatus: "Stranger",
    married: false,
    image:
      "https://plus.unsplash.com/premium_photo-1742230896417-6a811c76ac36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user: "Priya",
    age: 30,
    city: "Mumbai",
    isStatus: "Stranger",
    married: true,
    image:
      "https://images.unsplash.com/photo-1742038107091-9a7e1f01b42c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user: "Amit",
    age: 22,
    city: "Patna",
    isStatus: "Stranger",
    married: false,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user: "Sneha",
    age: 28,
    city: "Kolkata",
    isStatus: "Stranger",
    married: true,
    image:
      "https://images.unsplash.com/photo-1741514376184-f7cd449a0978?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D",
  },
];
let main = document.querySelector(".main");

let herofunc = function(){
  let sum = "";
arr.forEach(function (elem, idx) {
  sum =sum +` <div class="card">
<img src="${elem.image}" alt="">
<h2>${elem.user}, ${elem.age}</h2>

<h4>Married:${elem.married}</h4>
<h5>${elem.isStatus}</h5>
<button id="${idx}">Add Friend</button>
</div>`;
});
d

main.innerHTML = sum;
}

herofunc()


main.addEventListener("click", function (dets) {
  let gold = arr[dets.target.id];
  if(gold.isStatus == 'Stranger'){
    gold.isStatus = "Friend"
  }else{
    gold.isStatus="Stranger"

  }
   
   herofunc()
});
