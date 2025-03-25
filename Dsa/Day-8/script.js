let prompt = require("prompt-sync")();

// array 
// let arry = [];
// let myarr = new Array(4);

// array method 
// pop 

// let ar = [2,4,5,3,5,3];

// ar.push(44)
// ar.pop()
// ar.unshift(34)
// ar.shift()
// console.log(ar.length);
// sum of the array's elements 


// let size = Number(prompt("enter array's size"));

// let arr = new Array(size);
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt("enter number"))
//     // const element = arr[i];
//     sum = sum + arr[i]
    
// }
// console.log(arr);
// console.log(sum);

// find max element of the array

// let arr = [10,23,32,45,67,67];

// let max = Math.max(arr[0] , arr[1])
// let smax = Math.min(arr[0] , arr[1])

// for (let i = 2; i < arr.length; i++) {
//    if(arr[i] > max){
//     smax = max;
//     max = arr[i];
//    }else if(arr[i] > smax&& arr[i] != max ){
//     smax = arr[i];
//    }

// }

// console.log(smax);


// let rev = [1,2,3,4,5,6,7,8,9];

// let temp = new Array(rev.length);
// let i = 0;

// for (let j = rev.length-1; j >= 0; j--) {
//    temp[i] = rev[j]
//    i++
    
// }
// console.log(temp);;


// let arr = [1,2,3,4,5,6,7]   
// let i = 0, j = arr.length-1;
// while (i<j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j]= temp 
//     i++
//     j--
    
// }
// console.log(arr);


// let arr = [1,2,3,32,42,2234,34,343];
// let max = arr[0]
// let min = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>max) max = arr[i];
//     if(arr[i]<min) min = arr[i];

    
// }
// console.log(min)
// ;
// console.log(max);

// let arrr = [-1,2,3,4,5,66]
// let i = 0, j = arrr.length-1;

// while(i<j){
//     let temp = arrr[i]
//     arrr[i]=arrr[j]
//     arrr[j]=temp
//     i++
//     j--
// }
// console.log(arrr);

let arr = [1,0,0,1,1,0,1,0,0];

let i = 0, j = 0;
while(i<arr.length){
    if(arr[i]==0){
        let temp = arr[i]
        arr[i]= arr[j]
        arr[j]= temp
        j++
    }
    i++
}
console.log(arr);



