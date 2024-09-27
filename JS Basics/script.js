// Assignment 1: Print 'HelloWorld' in the body of the HTML document
document.getElementById('hello-world').textContent = 'HelloWorld';

// Assignment 2: Reverse a number
function reverseNumber(number) {
    return parseInt(number.toString().split('').reverse().join(''), 10);
}
let originalNumber = 32243;
document.getElementById('reversed-number').textContent = reverseNumber(originalNumber);

// Assignment 3: Check whether a passed string is palindrome or not
function checkPalindrome() {
    let inputString = document.getElementById('palindrome-input').value;
    let reversedString = inputString.split('').reverse().join('');
    let result = (inputString === reversedString) ? "It's a palindrome!" : "Not a palindrome!";
    document.getElementById('palindrome-result').textContent = result;
}

// Assignment 4: Capitalize the first letter of each word
function capitalizeWords() {
    let inputString = document.getElementById('capitalize-input').value;
    let capitalizedString = inputString
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    document.getElementById('capitalized-result').textContent = capitalizedString;
}
