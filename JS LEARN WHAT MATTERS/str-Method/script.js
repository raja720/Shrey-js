// String method

// 1 - Slice

let a = "apple";
let slice = a.slice(0, 3);
console.log(a);
console.log(slice);

// 2 - Templete literal or strings`` this is called backtics

let ab = `This is written in temp literal ${12 + 2}`;
console.log(`${ab} that is the feature of temp literal`);

// 3 - Split that is use for bracking the variable at the point of given

let str = "Raja is a bad developer";
let split = str.split(" ");
console.log(split);

// 4 - Replace :- is use for replace a first alphabet with other alphabet

let alphabet = "Hello ji kaise ho";
let replace = alphabet.replace("i", "y");
let replaceall = alphabet.replaceAll("i", "y");
console.log(replace);
console.log(replaceall);

// 4 - include that is use for check the varaible for some thing present in their

let String = "ram is a person";
let include = String.includes("ram");
console.log(include);

// if else statement

let number = 100;

if (number == 100) {
  console.log("Number is equal");
} else if (number < 0) {
  console.log("number is less than 0 ");
} else {
  console.log("bhkk sala");
}

// other way to write if else called  ternary operator

let age = 20;

let result =
  age >= 90
    ? console.log("goods")
    : age >= 80
    ? console.log("good")
    : console.log("bad");

// switch case

switch ("raja") {
  case "raja":
    console.log("matched case 1 ");
    break;
  case "shyam":
    console.log("case 2 match");

  default:
    console.log("laura");
    break;
}

// what is function :_ fuction is block of code which can reuse or run at any point of  time
// jab hum koi kaam baad me krna chahte hai aur baar baar karna chahte hai to hum function use krte hai

// how to write function

function raja() {
  console.log("hello raja "); // content inside function write here
}

raja(); //calling a function

// how to pass parameter to a function

function pram(val) {
  //the value inside the braket known as parameter
  console.log(val); //passing value print here
}

pram("raja"); //the value insite the call lnown as argument
pram("abhi");
pram("rakesh");
pram("rohit");

//Types of functions

// 1st :- Function statement

function abc() {
  console.log("function statement");
}
abc(); //calling this func

//2nd :- Function Expression
let def = function () {
  console.log("Function expression ");
};
def(); //calling this func

//3rd :- Anonymous Function

// function(){
//     console.log("Fat arrow function");
// };

//4th :- Fat arrow function

let ghi = () => {
  console.log("Fat arrow function ");
};
// 5th :- Fat arrow with one parameter
let ghij = (a) => {
  console.log(a);
};
ghij(12); //if you pass only one value then you remove fat arrow  in function if you want

// 6th :- Fat arrow with implicit return

let rtn = () => 12;

let ans = rtn(); //this func can return value where the function call
console.log(ans);

// implicit return or explicit return

// iife :- immidiateily invoked function expression
let iife = (function iifee() {
  let a = 12;
  return {
    set: function (val) {
      a = val;
    },
    get: function () {
      console.log(a);
    },
  };
})();

iife.set("32")
iife.get()

//Higher order function
//when a function return another function or accept a parameter then this is known as  hofs
// return
function hofs() {
  return function () {
    console.log("Higher order function");
  };
}

console.log(hofs()());
//Accept a parameter


function ritn(val1,val2,val3){
  console.log(val1,val2,val3);
}

ritn(21,14,34)

//CallBack function
//the function pass as an arguiment called callback function

function cfn(val){
  console.log(val);
}

cfn(function(){
  console.log('call back function ');
})


// First class function

let fcfn= ()=>{
  console.log("all functions are first class");
}

//pure function



//closure whaen a return function access parent function variable is known as closer

function parent() {
  let value = 132;
  return function(){
    console.log(value);
  }
}

let anws = parent()
anws()

//rest parameter

function paraam(a, b, c, ...rest) {
  console.log(a, b, c, ...rest);
}
paraam(1, 2, 4, 56, 23, 7, 889);

// Hoisting
console.log(av);
var av = 12;
hois();
function hois() {
  console.log("hoisting");
}


//Array 

// Array is  type data structure which can use for store multiple value  all at once place ;
// creating array 
let array = [34,13,15,16];
//indexing

// how to access member in array
console.log(array[0]);


// 2 way to declare an array ;

// 1st 
let  arr1 = [];

//2nd
let  arr2 = new Array();
arr2[0] = 14
arr2[1] = 13
console.log(arr2); // output = [14,13]

// Swap two variable without extra variable
let c = 10;
let b = 20;



c = c + b;//30
b = c - b//10
c = c - b; //20

console.log(c);
console.log(b);

let resuhvlt = 35 * 2 - (10 / 2) + 7;
console.log(resuhvlt); // Output: 74






