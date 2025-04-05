// let a  = Number(prompt("enter your number"));

// for (let i = 0; i <= a; i++) {
//    if(i == 4) continue

//    console.log(i);
// }

// let n = 10;

// let i = 1;

// while (i<=n) {
//    console.log(i);
//    i++
// }

// let n = Number(prompt("enter a number"));

// let sum = 0;

// while(n>0){
//     let rem = n%10;
//     sum = sum+rem;
//     n =Math.floor( n/10)
// }
// console.log(sum);

// let n = Number(prompt("enter a number"));

// let rev = 0;

// while (n>0) {
//     let rem = n%10;//this is used for get out last digit of a number;
//     rev = (rev*10)+rem
//     n = Math.floor(n/10) // this is used for remove last digit of a number
// }

// console.log(rev);

let n = Number(prompt("enter a number"));
let copy = n;
let sq = n * n;

let count = 0;

while (n > 0) {
  count++;
  n = Math.floor(n / 10);
}

if (sq % Math.pow(10, count) == copy) console.log("number is automorphic");
else console.log("not automorphic");

//Switch Case

let num = Number(prompt("enter a number"));

switch (n) {
  case 1:
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("enter a number btw 1 to 3");
    break;
}
k;
