// Question 1//

function greetUser() {
const name = document.getElementById('nameInput').value;

if (name.trim() === ""){
    document.getElementById('output').innerText = "Please enter a name"; return;

}

const message = `Hello, ${name}! Welcome to the site. `;
document.getElementById('output').innerText = message;


}

// Question 2 //

function changeText() {
    document.getElementById('message').innerText= "Hello, World!";

}

// Question 3 //

function addNumbers() {

const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);

if (isNaN(num1) || isNaN(num2)) {
    
document.getElementById('result').innerText = "Please enter valid numbers."; return;

}

const sum = num1 + num2;
document.getElementById('result').innerText = `The sum is: ${sum}`;

}

// Question 4 //

function updateTitle() {
    const newTitle = document.getElementById('inputField').value ;
    document.getElementById('title').innerText = newTitle;
}

// Question 5 //

function concatenateStrings() {
    const string1 = document.getElementById('string1').value;
    const string2 = document.getElementById('string2').value;

    const combined = string1 + string2 ;
    document.getElementById('combinedText').innerText = combined;
}

// Question 6 //

const button = document.getElementById('changeBgButton');
const colorBox = document.getElementById('colorBox');

button.addEventListener('click', function() {

    colorBox.style.backgroundColor = `blue`;
});
