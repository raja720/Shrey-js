// Map , Filter , and reduce
//  let arr = [1,2,3,4,5,6];

// arr.forEach(function(value){
    
//     console.log(value);
//  });
 
//map  map loop karta hai aur har baar returned array ko anya array me push kar deta hai;


//  let ans = arr.map(function(value){
//     return value*3;
//  });

//  console.log(ans);

 // filter  add true returned value in new array

//  let a = [2,3,53,6,36,64];

// let ans =  a.filter(function(value){
//     return value<40;
//  })

//  console.log(ans);

// Reduce   ek array se koi ek value banao;

// let a = [1,2,3,4,5,6];

// let ans = a.reduce(function(accumulator,key){
//     return accumulator*key

// },1)
// console.log(ans);



// for (let i = 10; i >=1 ; i--) {
//     console.log(i);
    
// }

// let i = 10;
// while(i>=1){
//     console.log(i);
//     i--;
// }


// let i = 3;
// while(i<31){
//     console.log(i);
//     i+=3;
// }

// let sum = 0;
// for (let i = 1; i <101; i++) {
//     sum = sum+i

// }

// console.log(sum);

// let str = "jksdgfjnerhdgfnbdfgjhfgdfgh";

// for(var i of str){
//     console.log(i);  
// }

// let arr = [1,3,1,1,3,4,5,2,5,6,3,6,7,6,7,6,7,5,5,4,3,3,3,4,5,5,4,4];
// let ans  =[...new Set(arr)];
//  let sorted = ans.sort(function(a,b){
//     return b-a;
// })

// console.log([...new Set(arr)].sort(function(a,b){
//     return b-a
// })[1]);

// let arr1 = [1,2,3,4,5,6,7,8,9];

// let ans = arr1.sort((a,b)=> b-a);
// console.log(ans);


// let arr = [1,2,3,4,5,6,7,8,9];

// let arr1 = [];

// for (let i = arr.length-1; i >= 0; i--) {
//     arr1.push(arr[i])
// }
// console.log(arr1);

let arr = [1,1,2,2,3,4,6,2,5,25,4,6,5];

let obj = {};

// arr.forEach(function(val){
//     obj[val] === undefined ? (obj[val] = 1) : obj[val]++;
// })



arr.forEach(function(val){
    if(obj[val]=== undefined){
        obj[val]=1;
    }else {
        obj[val]++;
    }
});
console.log(obj);
