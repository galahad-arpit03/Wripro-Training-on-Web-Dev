// Assignment 1: Display position of the first occurrence of "World"
let txt = "Hello World!";
let position = txt.indexOf("World");
document.getElementById('world-position').textContent = "Position of 'World': " + position;

// Assignment 2: Convert text to uppercase
let text = "JavaScript is fun!";
document.getElementById('uppercase-text').textContent = text.toUpperCase();

// Assignment 3: Remove specified number of characters from a string
function removeChars(str, num) {
    return str.slice(num);
}
let resultStr = removeChars("JavaScript", 4);
document.getElementById('removed-chars').textContent = "Result after removing 4 characters: " + resultStr;

// Assignment 4: Calculate sum
function calculateSum() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let sum = num1 + num2;
    document.getElementById('sum-result').textContent = "Sum: " + sum;
}

// Assignment 5: Convert input to uppercase on blur
function convertToUppercase() {
    let inputText = document.getElementById('input-text');
    inputText.value = inputText.value.toUpperCase();
}

// Assignment 6: Change background color based on clicked link
function changeColor(color) {
    document.body.style.backgroundColor = color;
}

// Assignment 7: Show date, prompt name, and sum of two numbers
function showDateAndPrompt() {
    alert("Today's date: " + new Date());

    let userName = prompt("What's your name?");
    alert("Hello, " + userName);

    let number1 = parseInt(prompt("Enter first number:"));
    let number2 = parseInt(prompt("Enter second number:"));
    alert("Sum: " + (number1 + number2));
}

// Assignment 8: Check if a number is odd or even
function checkOddOrEven() {
    let number = parseInt(document.getElementById('number-input').value);
    let result = (number % 2 === 0) ? "Even" : "Odd";
    document.getElementById('odd-even-result').textContent = "The number is " + result;
}

// Assignment 9: Display dynamic current time
function updateTime() {
    let timeNow = new Date().toLocaleTimeString();
    document.getElementById('current-time').value = timeNow;
}
setInterval(updateTime, 1000);
