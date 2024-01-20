// Introduction to JavaScript
// Lesson 6: Advanced Function Concepts

// This lesson covers more advanced concepts related to functions such as parameters, return types, and scope.

// Function with default parameters
function greet(name = 'Guest') {
	console.log('Welcome, ' + name);
}
greet(); // Calls with default value
greet('Anna'); // Calls with provided value

// Understanding scope in functions
let globalVar = 'I am global';
function showScope() {
	let localVar = 'I am local';
	console.log(globalVar); // Accessible here
	console.log(localVar); // Accessible here
}
showScope();
// console.log(localVar); // Unaccessible here - Uncomment to see the error

// Function returning a value
function sum(a, b) {
	return a + b;
}
let total = sum(5, 3);
console.log(total);

// CHALLENGES

// CHALLENGE 1: Write a function with multiple parameters
// Write a function 'describePerson' that takes name, age, and job as parameters and returns a description string.
// TODO: Write the 'describePerson' function here.

// CHALLENGE 2: Correct the scope issue
// The function 'showFavoriteColor' is supposed to print a person's favorite color, but there's a scope issue.
let favoriteColor = 'Blue';
function showFavoriteColor() {
	console.log('Favorite color is: ' + color); // TODO: Fix the variable scope
}
showFavoriteColor();

// CHALLENGE 3: Function that returns a function
// Write a function 'multiplier' that takes a number and returns a new function that multiplies any given number with the one passed to 'multiplier'.
// TODO: Write the 'multiplier' function here.

console.log('End of Advanced Functions');

module.exports = {
	describePerson,
	showFavoriteColor,
	multiplier,
};

// To run this JavaScript file, use the command 'node 06_AdvancedFunctions.js' in your terminal.

// ✅ REMOVE THIS LINE to check your work
