function add() {
    let num1 = window.prompt("Enter first number: ");
    let num2 = window.prompt("Enter second number: ");
    let sum = parseFloat(num1) + parseFloat(num2);
    window.alert("The sum is: " + sum);
}

function subtract() {
    let num1 = window.prompt("Enter first number: ");
    let num2 = window.prompt("Enter second number: ");
    let diff = parseFloat(num1) - parseFloat(num2);
    window.alert("The difference is: " + diff);
}
function multiply() {
    let num1 = window.prompt("Enter first number: ");
    let num2 = window.prompt("Enter second number: ");
    let product = parseFloat(num1) * parseFloat(num2);
    window.alert("The product is: " + product);
}

function divide() {
    let num1 = window.prompt("Enter first number: ");
    let num2 = window.prompt("Enter second number: ");
    let quotient = parseFloat(num1) / parseFloat(num2);
    window.alert("The quotient is: " + quotient);
}

function modulus() {
    let num1 = window.prompt("Enter first number: ");
    let num2 = window.prompt("Enter second number: ");
    let remainder = parseFloat(num1) % parseFloat(num2);
    window.alert("The remainder is: " + remainder);
}
function showTime() {
    let options = {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        timeZone: 'Asia/Kolkata', hour12: false
    };
    let formattedTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
    document.getElementById('currentTime').innerHTML = formattedTime.replace(',', '');

    // Update the greeting based on current time
    let currentHour = new Date().getHours();
    let greetingText = "";
    if (currentHour < 12) {
        greetingText = "Good Morning!";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon!";
    } else if (currentHour < 21) {
        greetingText = "Good Evening!";
    } else {
        greetingText = "Good Night!";
     }
    document.getElementById('greeting').innerText = greetingText;
}

showTime();
setInterval(function () {
    showTime();
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("add-button").onclick = add;
    document.getElementById("subtract-button").onclick = subtract;
    document.getElementById("multiply-button").onclick = multiply;
    document.getElementById("divide-button").onclick = divide;
    document.getElementById("modulus-button").onclick = modulus;
});
