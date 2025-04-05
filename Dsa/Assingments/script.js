// let num = Number(prompt("Enter a number"));
// let copy = num;
// let sum = 0;
// while (num>0) {
//     let rem = num%10;
//     sum = sum+rem;
//     num = Math.floor(num/10);
// }

// if(copy%sum == 0) console.log("harsd");
// else console.log("not hasard");

let n = Number(prompt("enter a number"));
let sum = 0;
for (let i = 1; i <= n/2; i++) {
    if(n%i == 0){
       sum = sum +i; 
    }
   
}
if(sum>n)console.log("abundant number");
else console.log("not anudant numebre");
