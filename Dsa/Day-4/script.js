// for (let i = 1; i <= 1; i++){
//     console.log("hello world");
// }

// let n = Number(prompt("Enter a number"));
// if(isNaN(n)){
//     console.log("Invalid Number");
// }else{


// let i;
// for( i = 1; i<=n; i++){
//     console.log('hello world');
// }

// console.log("fail at"+ i);
// }


// //print table of the user number

// let num = Number(prompt("enter a number"));

// for (let i = 1; i <=10 ; i++) {
    
//     console.log(`${num}* ${i} = (${num*i})`);
// }

// sum of the n number

// let number = Number(prompt("enter your number"));
// let sum = 0;
// for(let i = 1; i<=number; i++){
//     sum = sum+i;

// }
// console.log(sum);


// let number = Number(prompt("enter your number"));
// let fac = 1;
// for(let i = 1; i<=number; i++){
//     fac = fac*i;

// }
// console.log(fac);

let n = Number(prompt("enter your number"));

let even = 0 , odd = 0;
for (let i = 0; i <=n; i++) {
   if(i % 2 == 0)even = even+i;
   else odd = odd + i;
    
}
console.log("even" + even );
console.log("odd" + odd );