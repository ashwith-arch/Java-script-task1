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

// --------------------day 2 task----------------------



// --------switch case ----------------
let day = parseInt(prompt("Enter the number between 1 to 7"));
let myanswer;

switch(day){

    case 1:
        myanswer = "Sunday";
        break;

    case 2:
        myanswer = "Monday";
        break;

    case 3:
        myanswer = "Tuesday";
        break;

    case 4:
        myanswer = "Wednesday";
        break;

    case 5:
        myanswer = "Thursday";
        break;

    case 6:
        myanswer = "Friday";
        break;

    case 7:
        myanswer = "Saturday";
        break;

    default:
        myanswer = "None of the above";
        break;
}

document.write(myanswer);

// -----------------square number--------------

function suquare(num){
     return num*num
}
document.write(suquare(8))


 // convert the square and cube functions they should in all formats (function expression, declartion, arrow functions


// -----------square function---------

function square(num){
    return num*num
}
document.write(square(8))


function cube(num){
    return num*num*num
}
document.write(cube(8))


// --------------function expression---------

let square = function(num){
    return num*num
}
document.write(square(9))


let cube =function(num){
    return num*num*num
}
document.write(cube(10))

// --------------Arrow function-----------

let square =(num) =>{
    return num*num
}
document.write(square(18))

let cube =(num) =>{
    return num*num*num

}
document.write(cube(19))

 // Create an array with names and greet each name using a function/

let names = ['rama','sita','laxshmana','arjuna'];

function greet(name){
    document.write("Hello " + name + "<br>");
}

for ( let i=0;  i <names.length; i++){
    greet(names[i])
}



// -------SWITCH CASE---------------
function checkday(day){

    let myanswer;

    switch(day){

        case 1:
            myanswer = "Sunday";
            break;

        case 2:
            myanswer = "Monday";
            break;

        case 3:
            myanswer = "Tuesday";
            break;

        case 4:
            myanswer = "Wednesday";
            break;

        case 5:
            myanswer = "Thursday";
            break;

        case 6:
            myanswer = "Friday";
            break;

        case 7:
            myanswer = "Saturday";
            break;

        default:
            myanswer = "Invalid Number";
    }

    document.write(myanswer);
}

checkday(4);

// ---------------------day -3 task -3-----------------------------------------

// -----------------nested adress--------------
let details = {
    name : 'Ashwith',
    Age : '23',
    role : 'front end developer',
    adress:{
        telangana:'hyderabad',
        city:'huzurnagar',
        pincode:'508204'
    }
}
document.write(details.adress.telangana)
document.write(details.name + "<br>")
document.write(details.adress.city)


// --------------? property-----

let student  = {
    name : 'ashwith',
    education:'b.tech',



};
document.write(student?.name )


// ------------using for loop---------
let student = {
    name: "Ashwith",
    age: 23,
    course: "B.Tech"
};

for(let key in student){

    document.write(key + " : " + student[key] + "<br>");

}

// --------------new property---------------


let student= {
    name :"Ashwith",
    age :'23',
   

}
var  newstudent={
    age:'24',
    location:'hyderabad',
}
document.write(newstudent.age)

// ---------------loop and opitional chaining-------

let company = {

    departments: {

        hr: {
            id: 101,
            name: "HR",
            description: "Human Resource Department"
        },

        developer: {
            id: 102,
            name: "Development",
            description: "Software Development Department"
        },

        testing: {
            id: 103,
            name: "Testing",
            description: "Quality Testing Department"
        }

    }

};


for(let key in company.departments){

    let dept = company.departments[key];

    document.write(
        "ID : " + dept.id + "<br>" +
        "Name : " + dept.name + "<br>" +
        "Description : " + dept.description + "<br><br>"
    );
}


document.write(company.departments?.developer?.name);

// --------------------book rating---------------

let book = {

    title : "JavaScript Basics",
    author : "Ashwith",
    rating : 4

};
book.rating = 5;

document.write(
    "Title : " + book.title + "<br>" +
    "Author : " + book.author + "<br>" +
    "Rating : " + book.rating
);

// ------------------movie rating---------

let movie = {
    name : "RRR",
    hero : "NTR",
    rating : 5
};

let product = {
    productName : "Laptop",
    brand : "Dell",
    price : 50000
};

let userProfile = {
    name : "Ashwith",
    age : 23,
    city : "Hyderabad"
};
document.write(movie)
document.write(product)
document.write(userProfile)



// ----------------------expectional handing methods------------

let movie = {

    name : "RRR",
    hero : "NTR",
    rating : 5,

    details : function(){
        return this.name + " movie hero is " + this.hero;
    }

};

document.write(movie.details() + "<br><br>");

let product = {

    productName : "Laptop",
    brand : "Dell",
    price : 50000,

    details : function(){
        return this.productName + " price is " + this.price;
    }

};
document.write(product.details() + "<br><br>");

let userProfile = {

    name : "Ashwith",
    age : 23,
    city : "Hyderabad",

    details : function(){
        return "My name is " + this.name + " from " + this.city;
    }

};

document.write(userProfile.details());



















