let prompt = require("prompt-sync")() ;
//  let n = prompt("Enter your number");
 
//  for (let i = 1; i <= n ; i++) {
//   for (let j = 1; j <=i; j++) {
//     process.stdout.write("* ")
    
//   }
//   console.log();
    
//  }


//  let n = prompt("enter your number");
//  for (let i = 1; i <= n; i++) {
//    for (let j = 1; j <= n-i+1; j++) {
//     process.stdout.write("* ")
    
//    } 
   
//    console.log();  
    
//  }

let n = prompt("enter a number");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n-i; j++) {
    process.stdout.write("-")
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write( "* ")
    
  }
  console.log();
  
}
