let button1 = document.querySelector(".backward");
let button2 = document.querySelector(".forward");
// button.addEventListener("click",function(){
//     // location.href = 'https://www.sheryians.com/classroom/gotoclassroom/6775253edb7d074fe7a88b85'
//     location.reload()
// })

button1.addEventListener("click",function(){
    history.back()
})

button2.addEventListener("click",function(){
    history.forward()
})

console.log(navigator.userAgent);// to know about the browser;
console.log(navigator.onLine); //this is use for know that you are currently active or not


 //Local  storage :-  browser storage that is known as local storage;

 console.log(localStorage.clear());// for clear all local storage
 localStorage.setItem("user", "raja singh") // for set a particular key;
 localStorage.setItem("user",'raja babu')// for update key use same setitem key and change her value
 let user = localStorage.getItem("user")// for get a particular key;
//  localStorage.removeItem("user")// for remove a particular key;

// Aap obj ko directly localStorage me save nhi kar paaenge
//isiliyie hum use karenge JSON.stringify to convert obj to string then we push obj data in localStorage


const users = [
    { username: "raja123", age: 21, city: "Samastipur" },
    { username: "john_doe", age: 25, city: "Delhi" },
    { username: "priya_singh", age: 22, city: "Patna" }
  ];

  let newUsers = JSON.stringify(users);

  localStorage.setItem("user",newUsers);

  let cusers = localStorage.getItem("user");

  console.log(JSON.parse(cusers)); // when we need the localStorage data then we use json.parse for convert the string into obj then we use


 // Session storage :- 