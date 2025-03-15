// here we use some Math() method thats help ;

console.log(Math.ceil(10.99));

console.log(Math.floor(100.9));

console.log(Math.round(10.9));//it behave like combo of ceil and floor

console.log(Math.abs(-8 ));//it convert negative value in positive

console.log(Math.trunc(10.58649));// it remove all the number after decimaal;

console.log(Math.pow(5, 4));// add power of the number;

console.log(Math.sqrt(625));//  gives squrt of the number;

console.log(Math.cbrt(125));//   gives cbrt of the number;

console.log(Math.max(10,20,40,60,85,34)); // it gives the maximum number;

console.log(Math.min(10,23,45,67,89,9));// it give the minimum number;

console.log(Math.random());// it give a number btween 0 and 1 ;

// let a = 234.9834598348;
// console.log(a.toFixed(2)); // it use for edit the number after deciaml that you need;


// let p = Number(prompt("enter principle"));
// let r = Number(prompt("enter rate"));
// let t = Number(prompt("enter time"));

// console.log((p*Math.pow(1+r/100, t))-p);


//otp generator

let otp = Math.floor(Math.random()*9000+1000);

console.log(otp);

let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let c = Number(prompt("Enter third number"));

if(a>b && a>c){
   console.log(`${a}is greater"`);
}else if(b>a && b>c){
   console.log(`${b}is greater"`);
}else {
   console.log(`${c} is greater`);
}

