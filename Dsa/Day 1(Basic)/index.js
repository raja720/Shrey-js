// Questions (DSA);
// Q:-1st -- Sum of two integer
 
// let a  = 30;
// let b  = 40;
// console.log(a          +         b);
     //       operants operator operants 

// Q:-2nd -- Relation btw number and string;
    

// adding string with another string that give string the process called (concatination);
// console.log("1"+1);Concatination string + int give string
// int + int = int (arithmatic)
// let c = 20;
// let d = "raja";
// console.log(typeof(c+d));// output = string;

//type corecion
// conversion of datatype regarding operator called type corecion;

// console.log("1"+1);Concatination number + int
// console.log(1-"1");Arithmatic

//Q:- 3 Accept and print the answer

// let acc = Number(prompt("Enter your age"));
// console.log(`your age is ${acc}`);

//Q:- 4 swap two value in 3 way

// //1st way with temp varible
// let a  = 10 ;
// let b = 20;

// let temp  =  a
// a = b 
// b = temp
// console.log(a , b);

// 2nd method

// a = a + b ;
// b = a- b;
// a = a - b

// console.log(a,b);

// //3rd method

// [a , b ] = [ b,a ]

// console.log(a,b);


//logical operator $$ and ||

//&& this operator is use to check all the statement are true then he give true

// console.log(10>9 && 10 >3 && 10<12);

// || this is use for check only one statement are true 

// console.log(14<13 || "13"===13);



// let i = 11;
// i=i++ + ++i;
// console.log(i);

// let a = 10++; //give error beccaude we canot use operator with number
// console.log(a); // give error

// let b = 20;
// let c = ++(a--); //this is also give error beacause we cannot use operator with number


let a = true;
let b = ++a; // this is working because true opeartor is give 1 and 1 is number
console.log(b); // output = 2;


// let a = 2;
// let b = 3;
// a = a+b 5
// b = a-b; 2
// a = a-b 3

 


// let a = 11, b = 22, c;

// c = a+b + a++ + b++ + ++a + ++b;
// console.log("a="+ a);
// console.log("b="+ b);
// console.log("c="+ c);

// let  i = true;
// i++
// console.log(i);

// let i = 1, j= 2, k = 3 ;

// let m = i-- - j-- - k--;
//         1  -  2   - 3
// console.log(i);//0
// console.log(j);//1
// console.log(k);//2
// console.log(m);//-4

// let  i = 0;//1
// i= i++ - --i + ++i - i--;
    
// console.log(i);



let i = 19, j= 29, k;

k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
//  19  - 18  + 28 -  29  + 18  - 29  + 19 - 28;       

console.log(i);//19
console.log(j);//29
console.log(k);//-20





