// just to check if its working
// check after you've properly linked it in the html file

console.log("Hello")

// open the html file with live server and then open console with ctrl+shift+i

// scope of variables:
// scope is where you can access the declared variables
// 1- Global
// why global? accessible both inside and outside function(?)
// any variable declared using 'var' or 'let' keywords outside the functions,
// the scope of that variable is global

// Any variable declared WITHOUT var or let or const keywords, it will become global
// (not a good practice)

// 2- Function scope (local scope)
// a- any variable declared using var keyword inside the function

// 3- block scope
// a- any variable declares using the let keyword inside the block, can only be used inside

//

var g = 10; // for global scope
// this is not inside any function so its scope can be declared anywhere
//// let g = 10; // same scope if u use 'let'

console.log("(Outside the function) g= " +g)

function todo() {
    console.log("(Inside the function) g= " +g) // for global scope example, does not print this
    // statement bc its inside the function
    let a = 5;
    console.log("(inside the function) a= " +a) // for function variable, will work inside the function

    {
        let b = 22; // will only work if you use let keyword, if you use the var keyword it becomes global
        // and can be accesses both inside and otuside the functions but var inside a block will only work 
        // for the code inside the block only.
        console.log("(Inside the block) b= " +b) // example for block scope

        let c = 100;
        console.log("(Inside the block) b= " +c) // example for block scope
    }
    ///// console.log("(Inside the block) b= " +c) // example for block scope
    //// console.log("(Inside the block) b= " +b) // example for block scope //shows error bc u are
    // trying to access the variable outside the block that has been declared in already.

}

// Inner function has access to everything in the outside functions but outter functions 
// do not have that access to all inner functions.

// so call the function: 
todo();

//// console.log("(inside the function) a= " = +a); // will be an error as it is not inside a function

