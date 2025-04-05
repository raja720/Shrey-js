let prompt = require("prompt-sync")();
//  let n = prompt("Enter your number");

//  for (let i = 1; i <= n ; i++) {
//   for (let j = 1; j <=i; j++) {
//     process.stdout.write("* ")

//   }
//   console.log();

//  }

 let n = prompt("enter your number");
 for (let i = 1; i <= n; i++) {
   for (let j = 1; j <= n-i+1; j++) {
    process.stdout.write("* ")

   }

   console.log();

 }

//print right triangle  pattern using nested loop

// let n = prompt("enter a number");

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n-i; j++) {
//     process.stdout.write("-")
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write( "* ")

//   }
//   console.log();

// }

//print x pattern using nested loop

// let n = Number(prompt("enter a number"));
// if (n % 2 !== 0) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i == j || i + j == n + 1) {
//         process.stdout.write("* ");
//       } else process.stdout.write("  ");
//     }
//     console.log();
//   }
// } else console.log("enter odd number");

  

// print v pattern 

// let n = Number(prompt("enter a number"));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <=n*2; j++) {
//     if(i== j || i+j == n*2) process.stdout.write("* ")
//     else process.stdout.write("  ")
//   }
//   console.log();
  
// }