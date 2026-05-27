// -------------------diloge boxes--------------------

// alert
// prompt
// confirm


//alert("hello alert")
// prompt("please enter your name ")
// confirm("please confrom")

// -------------switch cases--------------
// switch(true){
//     case 10 >20:
//     myanswer = 'red'
//     break;
//     case 10==20:
//         myanswer:'black'
//     break;
//     case 30 > 20:
//         myanswer ="yellow"
//     break;
//     default:
//         myanswer= "non of the above"
//     break;



// }
// document.write(myanswer)






// ---------------------tasks------------------




// Print numbers from 1 to 10

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


// Print even numbers from 2 to 20

let num = 2;
while (num <= 20) {
    console.log(num);
    num += 2;
}


// Ask password until correct using while loop

let password = "";
while (password !== "Ashwith@10") {
    password = prompt("Enter Password:");
}
alert("Correct Password!");


// Ask user two numbers and display sum

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let sum = num1 + num2;
console.log("Sum =", sum);


// Age Validator


let age = Number(prompt("Enter your age:"));
if (age < 0) {
    console.log("Invalid age");
} else if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not eligible to vote");
}


// even/oddd

let number = Number(prompt("Enter a number:"));
if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}


// Largest of Two Numbers

// Ask user two number and print the largest number

// if both are equal show "Both are equal"

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
if (a > b) {
    console.log(a + " is larger");
} else if (b > a) {
    console.log(b + " is larger");
} else {
    console.log("Both are equal");
}


// Default Username (Nullish Coalescing)

let username = null;
let displayName = username ?? "Guest";
console.log(displayName);


// Print Numbers from 1 to 10

// using for loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Print Even Numbers using both for and while loops

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let even = 2;
while (even <= 20) {
    console.log(even);
    even += 2;
}


// Countdown Using while
// Print Numbers from 10 to 1

let count = 10;
while (count >= 1) {
    document.write(count);
    count--;
}