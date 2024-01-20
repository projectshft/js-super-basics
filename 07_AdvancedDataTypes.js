// Introduction to JavaScript
// Lesson 7: Advanced Data Types - Arrays and Objects

// Arrays and objects are fundamental data structures in JavaScript.

// Arrays: A collection of elements
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // Accessing the first element, "Apple"

// Objects: A collection of key-value pairs
let person = {
	name: 'Alice',
	age: 25,
	job: 'Developer',
};
console.log(person.name); // Accessing the value of the 'name' key

// CHALLENGES

// CHALLENGE 1: Update Array Elements
// The 'colors' array below has a mistake. Change "Yello" to "Yellow".
let colors = ['Red', 'Green', 'Yello'];
// TODO: Correct the spelling of "Yellow".

// CHALLENGE 2: Add to an Object
// Add a 'salary' key to the 'employee' object with the value of 50000.
let employee = {
	name: 'Bob',
	job: 'Designer',
};
// TODO: Add a 'salary' key to the 'employee' object.

// CHALLENGE 3: Accessing Object Properties
// Write a function 'getJob' that takes an object and returns the value of the 'job' key.
// TODO: Write the 'getJob' function here.

console.log('End of Advanced Data Types');

module.exports = {
	colors,
	employee,
	getJob,
};

// To run this JavaScript file, use the command 'node 07_AdvancedDataTypes.js' in your terminal.

// ✅ REMOVE THIS LINE to check your work
