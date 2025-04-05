let num = Number(prompt("Enter a number"));
let copy = num;
let sum = 0;
while (num>0) {
    let rem = num%10;
    sum = sum+rem;
    num = Math.floor(num/10);
}

if(copy%sum == 0) console.log("harsd");
else console.log("not hasard");