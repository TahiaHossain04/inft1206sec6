console.log("Hello");

window.onload = function() {
    document.querySelector('#btn2').onclick=function() {
        console.log("Durham College!!!") // Prints Durham College.
    };
    
    document.querySelector('#btn2').onclick=function() {
        console.log("Thavisha Dayarathna...") // Prints Thavisha Dayarathna because it overrides Durham College.
    };
    
    document.querySelector('#btn3').addEventListener('click', function() {
        console.log("Using Event Listener") // Prints Using Event Listener 
    }); 
    
    document.querySelector('#btn3').addEventListener('click', function() {
        console.log("INFT 1206") // Prints both 'Using Event Listener' and 'INFT 1206' because you can write multiple event listener functions. 
    });
}



// Every action will fire an event.
// DOM - Document object model - is an internal representation of your document
// Can change the internal representation of the document without changing the source code.


