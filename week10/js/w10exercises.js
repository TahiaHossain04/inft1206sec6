console.log("Hello")

// 1. 
// Write a function buildArray that takes two Numbers, and returns
// an Array filled with all numbers between the given
// number: buildArray(5, 10) should return [5, 6, 7, 8, 9, 10]

// 1st way

// declare function using the keyword 'function'
// name it buildArray
// pass the 2 numbers as shown in the question
// here the n1 and n2 will be included and it will also show all the numbers
// btn n1 and n2 numbers 
function buildArray(n1, n2){
    let arr=[]; // declare an array by using the 'arr' keyword
    // Use loops to do this so you can get an array as asked for:
    for(let i=n1;i<=n2;i++){ // we want the first element to be n1 and the last to be n2
        // with all the ohter numbers between them to also be expected but what does i++ do?
        arr.push(i); // why push?
    } // finish the loop
    return arr // returns the array that has been mode
}

// to test it, print the array 
console.log(buildArray(5, 10)); // the output is [5,6,7,8,9,10]

// 2nd way (function expression) (declare it as a constant and then assign a function to it)

const buildArray2 = function (n1, n2){
    let arr=[]; // We declare this bc we get an array back as an answer from the console 
    // We dclare it to let the console that we want the answers to be in an array format?
    for(let i=n1;i<=n2;i++){ 
        arr.push(i);
    } 
    return arr;
}

console.log(buildArray2(5, 12)); // the output is [5,6,7,8,9,10,11,12]

// 3rd way - arrow function (same as the 2nd one but change one thing)

const buildArray3 = (n1, n2) => { // remove the function keyword and keep the arrows instead
    let arr=[]; 
    for(let i=n1;i<=n2;i++){  // i++ is appending by 1
        arr.push(i); // push is basically appending? check again- adding to the array if its appropriate
    } 
    return arr;
}

console.log(buildArray3(5, 15)); // [5,6,7,8,9,10,11,12,13,14,15]

// ----------------------------------------------------------------------------------------------------------------------//

// 2.
// Write a function checkAges that takes two arguments: an Array of ages
// (Number); and a cut-off age (Number). Your function should return true if all of
// the ages in the Array are at least as old as the cut-off age: checkAges([16,
// 18, 22, 32, 56], 19) should return false and checkAges([16, 18, 22, 32,
// 56], 6) should return true.

function checkAges(ages, cutOffAge){ // why not use n1 and n2? bc of style guideline or is it not gonna run)
    for(let i=0; i<ages.length; i++){ // let i be equal to 0. and the 2nd parameter is to check if the element its 
        // thats being iterated rn is less than the length of the elements inputted in the ages array.
        if(ages[i]<cutOffAge){
            return false; // will return false IF any of the ages inputted in the array is less than the cutoffage
            // also provided by the user 
        } // We don't declare an array bc here the array is being inputted by the user, so it is being passed as
        // a parameter already so no need to declare it otherwise.
    }
    return true; 
}

console.log(checkAges([16, 18, 22, 32,56], 6)) // output is true bc all the ages mentioned in the array are
// higher than 6 so none of them come false
console.log(checkAges([1, 2, 3, 4, 5], 2)) // output false (it can be equal to the cutoffage but not less than)

// ---------------------------------------------------------------------------------------------------------------------// 

// 3.
// Write a function containsBadWord that takes two arguments: badWords (an Array of words that can’t be used),
// and userName (a String entered by the user). Check to see if any of the words in badWords are contained
// within userName. Return the badWord that was found, or null if none are found

function containsBadWord(badWords, userName){
    for(let i=0; i< badWords.length; i++) {
        if (userName.includes(badWords[i])) {
            return badWords[i];
        }
    }
    return null;
}

console.log(containsBadWord(["stupid", "weird", "crazy"], "Are you crazy?")); // Output: "stupid"

// -----------------------------------------------------------------------------------------------------------------------//

// 4.
// Write a function that takes a String and checks whether or not it begins with
// one of "Mr.", "Mrs.", or "Ms.". Return true if it does, otherwise false.

function startsWithTitles(titles) { // only has one parameter
    let someWords = ["Mr.", "Mrs.", "Ms."]; // declare an array with the words to catch
    for(let i=0; i < someWords.length; i++) { // set i to index 0 so it starts witht he very first element in the array, 
        // then it checks if the iterated word is less than the length of the elements in someWords array, im this we have
        // 3 elements in that array so it checks through the input thrice to check for the 3 different elements that could 
        // be found in the sentence inputted and then it appends that word if found(?) --- understand better pls
        if (titles.startsWith(someWords[i])) {
            return true;
        }
        return false
    }
}

console.log(startsWithTitles("Mr. Khalid"));