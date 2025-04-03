// accept a n number and print hello world n times
// let n = Number(prompt("Enter a number"));
// if(isNaN(n)){
//     console.error("Invalid input")
// }else{
// let i ;

// for ( i = 1; i <=n; i++) {
//     console.log("hello world");
    
// }

// console.log("failed at " + i);
// }

// let n = Number(prompt("enter a number"));

// for (let i = n; i >= 1 ; i--) {
//     console.log(i);
    
// }

// let num = Number(prompt("enter a number"));

// for (let i = 1; i<=10; i++) {
    
//     console.log( `${num} * ${i} = ${num*i}`);
// }

// Sum of the n number 

// let n =Number(prompt("enter a number"));

// let sum = 0;

// for (let i = 1; i <=n; i++) {
//     sum+= i;
    
// }

// console.log(sum);

// Multiple of the n number 
// let n =Number(prompt("enter a number"));

// let fact = 1;

// for (let i = 1; i <=n; i++) {
//     sum*= i;
    
// }

// console.log(fact);


// let n = Number(prompt("enter a number"));

//  let evenSum = 0, oddSum = 0;

//  for (let i = 1; i <= n ; i++) {
    //     if(i%2 == 0) evenSum = evenSum+i;
    //     else oddSum = oddSum+i;
    
    //  }
    
    //  console.log("evenSum "+evenSum);
    //  console.log("oddSum " +oddSum);

 // factors of a number;   
// let n = Number(prompt("enter a number"));

// for (let i = 1; i <= n/2 ; i++) {
//    if(n%i == 0) console.log(i);
    
// }
// console.log(n);

//check the number is prime or not (A number is divided by 1 and itself)
let n = Number(prompt("enter a number"));
let isPrime = true
for (let i = 2; i <= n/2; i++) {
// (checking the number is divided with another number)
if(n%i== 0) {
    isPrime = false;
    break
   }
}

if(isPrime) console.log("number is prime");
else console.log("not a prime number");


    
