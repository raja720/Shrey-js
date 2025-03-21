// let n = Number(prompt("enter a nunber"));543

// let sum = 0;

// while (n>0) {
//     let rem = n%10;
//     sum = sum+rem;
//     n = Math.floor(n/10);
    
// }
// console.log(sum);

// console.log(Math.floor(103/10));


//let n = Number(prompt("enter a nunber"));

// let rev = 0;

// while(n>0){
//     let rem = n%10;
//     rev = ((rev*10)+rem);
//     n = Math.floor(n/10);
// }

// console.log(rev);

let n = Number(prompt("Enter a number"));

let copy = n;
let sq = n*n;

let count = 0;

while (n>0) {
    count++;
    n = Math.floor(n/10);

}
console.log(count);

if (sq%Math.pow(10,count) == copy) console.log("this is automorphic");
else console.log("this is not automorphic");
    


