function showOutput(){
    let num1 = document.querySelector('#first-input').value;
    let num2 = document.querySelector('#second-input').value;

    document.querySelector('#output').textContent = "The multiplication of " + num1 + " and " + num2 + " is " + (num1*num2);
}

document.querySelector('#btn').addEventListener("click", showOutput);