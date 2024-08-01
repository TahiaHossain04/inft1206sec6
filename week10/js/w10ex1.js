// Function Declaration

// Example1 : without passing a parameter
function greeting1() {
    console.log("Hello ");
}
greeting1();


// Example2 : without passing a parameter
function greeting2() {
    return "Hello ";
}
// storing the function in a variable
let str = greeting2();
// printing the varablei
console.log(str);
console.log(greeting2());


// Example3 : passing a parameter
function greeting3(name) {
    //return "Hello "+ name;
    //return 'Hello '+ name;
    //return `Hello ` + name;
    return `Hello ${name}`;
}
console.log(greeting3("Lithasha"));
console.log(greeting3("5"));
console.log(greeting3());


// Example4 : adding default value.
function greeting4(name = 'Sam') {
    //return "Hello "+ name;
    //return 'Hello '+ name;
    //return `Hello ` + name;
    return `Hello ${name}`;
}
console.log(greeting4());
console.log(greeting4('Tom'));


// Example5 : addition
function sum(num1,num2) {
    return num1+num2;
}
console.log(sum(3,5)); // adding correct two numbers
console.log(sum('3','5')); // adding two numbers as strings
console.log(sum('Hi','Joe')); // adding two strings
console.log(sum(3)); // putting only one value
console.log(sum(3,5,9)); // putting more than two values.
console.log(sum());


// Example6 : addition
function sum(num1 = 0,num2 = 0) {
    return num1+num2;
}
console.log(sum());
console.log(sum(3));






// Function Expression
let m = sum();
console.log(m)
console.log(typeof(m));


// 'f' is another name for the 'sum' function.
let f = sum;
console.log(typeof(f));
console.log(f(6,10));
f = 9;
//console.log(f(6,10));// this gives an error. because 'f' is a function. but in here you have assigned a value but you cannot call the nnumber.


const f2 = function() {
    return "Good Afternoon";
}
console.log(f2());




// Function Expression(a shortcut) / Arrow Expression
const f3 = ()=> "Good Afternoon";
console.log(f3());


const sum2 = function(num1 = 0,num2 = 0) {
    return num1+num2;
}

const sum3 =(num1 = 0, num2 = 0) => num1+num2;
console.log(sum2(2,3));
console.log(sum3(2,3));


// var a = prompt("Enter first number"); // enter 11
// var b = prompt("Enter second number"); // enter 12
// var result = a + b;
// console.log("The result is " + result);

console.log(Math.max(7,22,-1,45));
console.log(Math.round(0.5221255,3));