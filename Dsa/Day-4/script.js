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

// let sum = 1;

// for (let i = 1; i <=n; i++) {
//     sum*= i;
    
// }

// console.log(sum);


// let n = Number(prompt("enter a number"));

// let even = 0 ,odd = 0;

// for (let i = 1; i <=n; i++) {
//    if(i%2 == 0) even= even+i;
//    else odd = odd+i
    
// }


// console.log("even " + even);
// console.log("odd " + odd);

//check the factor of the number
// let n = Number(prompt("enter a number"));

// for (let i = 1; i <=n/2; i++) {
//     if(n%i == 0) console.log(i);
    
// }
// console.log(n);

let n = Number(prompt("Enter a nunber"));

let isprime = true;

for(let i = 2; i<=n/2 ; i++){
    if(n%i == 0){
        isprime=false;
        break;
    }
        

}

if(isprime) console.log("number is prime");
else console.log("number  is not  prime");