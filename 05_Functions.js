// Introduction to JavaScript
// Lesson 5: Functions

// Functions are one of the fundamental building blocks in JavaScript.
// A function is a set of statements that performs a task or calculates a value.

// Defining a simple function
function greet() {
	console.log('Hello, JavaScript!');
}
greet(); // Calling the function

// Function with parameters
function greetPerson(name) {
	console.log('Hello, ' + name);
}
greetPerson('Alice'); // Calling the function with a parameter

// Function that returns a value
function add(a, b) {
	return a + b;
}
let result = add(5, 3);
console.log(result);

// CHALLENGES

// CHALLENGE 1: Correct the function
// The function below is supposed to greet a person, but it's not working as expected.
function greetIncorrectly(name) {
	console.log('Hello, ' + person); // TODO: Fix the variable used in the console.log
}
greetIncorrectly('Bob');

// CHALLENGE 2: Complete the function
// Write a function 'multiply' that multiplies two numbers and returns the result.
// TODO: Write the 'multiply' function here.

// CHALLENGE 3: Fix the return value
// The 'subtract' function should return the result of subtracting b from a.
function subtract(a, b) {
	console.log(a - b); // TODO: Change this to return the result instead of logging it.
}

console.log('End of Functions');

module.exports = {
	greetIncorrectly,
	multiply,
	subtract,
};

// To run this JavaScript file, use the command 'node 05_Functions.js' in your terminal.

// ✅ REMOVE THIS LINE to check your work
