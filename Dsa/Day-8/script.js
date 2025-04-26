let prompt = require("prompt-sync")();

// array
// let arry = [];
// let myarr = new Array(4);

// array method
// pop

let ar = [2, 4, 5, 3, 5, 3];

// ar.push(44)
// ar.pop()
// ar.unshift(34)
// ar.shift()
// console.log(ar.length);
// sum of the array's elements

// ar[10]=1000
// console.log(ar);
// ar[5]=100;
// console.log(ar);

// in js there is no fixed size of array;
// array is always dynamic in js;
// let arre = new Array(4);
// arre[0]=1;
// arre[1]=2;
// arre[2]=3;
// arre[6]=4;
// arre.push(3)
// console.log(arre);

// let size = Number(prompt('Enter the size of the array: '));
// let arr = new Array(size);
// let sum = 0;
// for(let i = 0; i<size;i++){
//     arr[i]= Number(prompt("enter number"))
//     sum = sum + arr[i];

// }
// console.log(arr);
// console.log(sum);

// let arr = [10,24,32,5,34,67];
// let min = maha[0];

// for (let i = 1; i < arr.length; i++) {
//     if(arr[i]<min){
//         min = arr[i]
//     }

// }
// console.log(min);

// let arr = [ 10,20,39,43,65,65,34];
// let max = Math.max(arr[0],arr[1]);
// let smax = Math.min(arr[0],arr[1]);

// for (let i = 0; i < arr.length; i++) {
//     if(max < arr[i]){
//         smax = max;
//         max= arr[i]
//     } else if(smax <arr[i]&& arr[i]!=max  ){
//         smax = arr[i]

//     }

// }
// console.log(max);
// console.log(smax);

// let arr = [12,34,43,23,434,534,34];
// let fmin = Math.max(arr[0],arr[1])
// let smin = Math.min(arr[0],arr[1])

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]<fmin){
//         smin = fmin;
//         fmin = arr[i]
//     }else if(arr[i]<smin&&arr[i]!=fmin){
//         smin = arr[i]
//     }

// }

// console.log(fmin);
// console.log(smin);

// Q;-reverse a array;

// let arr = [1,2,3,4,5,6,7];
// let narr = new Array(arr.length);
// let i = 0
// for (let j = arr.length-1; j >= 0; j--) {
//        narr[i] = arr[j]
//        i++

//     }

//     console.log(narr);

// let arr = [1,2,3,4,5,6,7];
// let i = 0;
// let j = arr.length-1;

// while (i<j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }

// console.log(arr);

// let arr = [1,0,1,0,0,0,1,1,0];
// let i = 0;
// let j = 0;
// while(i<arr.length){
//     if(arr[i] == 0){
//         let temp = arr[i];
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
//     i++
// }
// console.log(arr);

// let arr = [1, 0, 1, 0, 0, 1];

// let i = 0;
// let j = 0;

// while (i < arr.length) {
//   if (arr[i] == 1) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++
//   }
//   i++
// }
// console.log(arr);

let arr = [1,2,3,4,5];

let temp = arr[0];

for (let i = 0; i < arr.length -1; i++) {
  arr[i] = arr[i+1];
}
console.log(arr);
arr [arr.length -1] = temp

console.log(arr);
sd
