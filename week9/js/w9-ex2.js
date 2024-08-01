// declare a function by its name using 'function'
// We need to call the function in order to run in
function showGreetingMessage(){
    // declare a variable using 'let'
    // window.prompt is for the prompt message to show to the user
    let name = window.prompt("What is your name?");
    // window.alert is to give the user a message
    // (hello + whatever input is provided by the user in the prompt box)
    window.alert("Hello " + name);
}

// Call the function to use it 
// showGreetingMessage();

// The output for this would be that the window will show a dialogue box and ask
// the user to input their names. After inputting the user name the user clicks "ok"
// and gets the alert message as an output (Hello name)


// document.querySelector - to get a reference from the object (the reference in this case
// is the html file which is called document. So we select a specific query from the document)
// #btn is the id number of the input type in the html file- this is the name of the
// query we are selecting from the document
// addEventListener- is used so that when the program register a click on the selected
// query it will add an event which is calling the "showGreetingMessage" function
// One of the parameters of this function is click and the 2nd parameter is calling of the function
document.querySelector("#btn").addEventListener("click", showGreetingMessage)