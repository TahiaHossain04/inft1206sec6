// Declare function
function showOutput(){
    // I don't get this part below??
    let name = document.querySelector('#first-name').value;

    document.querySelector("#output").textContent = "Hello " + name;
    document.querySelector("#output").style.color = "red";
}


document.querySelector('#btn').addEventListener("click", showOutput)
// '#' bc its an id type that we are referencing form the html
