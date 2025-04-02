// let year = Number(prompt("Enter a year"));

// if(year%4 == 0 && year%100 != 0 || year% 400 == 0 ){
//     console.log( year + " " +" Is a Leap Year");
// }else {
//     console.log(year +  ' Is Not a leap year');
// }

// Shop discount

// let amount = Number(prompt("enter your amount"));
// let dis = 0;
// if (amount >= 0 && amount <= 5000) dis = 0;
// else if (amount > 5000 && amount <= 7000) dis = 5;
// else if (amount > 7000 && amount <= 9000) dis = 10;
// else if (amount > 9000) dis = 20;
// else {
//   console.log("invalid input");
// }
// console.log(amount - (dis * amount) / 100);


// bijli bill calculator

// let unit = Number(prompt("Enter your bill unit"));
// let amount = 0;
// if(unit > 0 && unit <= 100){
//     amount = unit*4.2;
// }else if(unit> 100 && unit <= 200){
//     amount =  (100 *4.2)+ (unit-100)*6;
// }else if(unit>200 && unit <= 400){
//     amount = (100*4.2)+(100*6)+ (unit-200)*8
// }else if(unit > 400){
//     amount = (100 *4.2)+(100*6)+(200*8)+ (unit-400)*13
// }
// console.log(amount);

let unit = Number(prompt("enter your unit"));

let amount = 0;

if(unit>400){
    amount =(unit-400)*13;
    unit = 400;
} if(unit>200 && unit<=400){
    amount = amount + (unit-200)*8;
    unit = 200

} if(unit>100 && unit<=200){
    amount = amount + (unit - 100)*6;
    unit = 100
}
    amount = amount + unit*4.2;


console.log(amount);

