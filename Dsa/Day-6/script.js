// let com = Math.floor(Math.random() * 100)+1;

// let userinput;

// do {
//     userinput = Number(prompt("Guess a number between 1 to 100"));
//     if(isNaN(userinput) || userinput<0 || userinput>100){
//         console.log("Enter a valid Number");
//         continue

//     }
//     if(userinput> com) alert("too hight, try again");
//     else if(userinput< com) alert("too low, try again");
//     else console.log("congrats😊🤞");
// } while (userinput !== com);
let userinput;

do {
    let num1 = Number(prompt("Enter your first number"));
    let num2 = Number(prompt("Enter your second number"));
    let operator = prompt("enter a operator btw (+,-,*,/)");

    switch(operator){
        case '+': console.log("result  " + (num1 + num2));
        break
        case '-': console.log("result  " + (num1 - num2));
        break
        case '*': console.log("result  " + (num1 * num2));
        break
        case '/': 
        if(num2 !== 0) console.log("result  " + (num1 / num2));
        else console.log("enter a valid number");
        break
        default: 
        console.log("please enter valid operator");

    }
    userinput = prompt("kya aap dubara chalana chahate hai yes / no").toLowerCase()
} while (userinput === "yes");