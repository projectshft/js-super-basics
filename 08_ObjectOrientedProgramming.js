// Introduction to JavaScript
// Lesson 8: Object-Oriented Programming

// Basics of JS Objects
// Objects are used to store multiple values in a single variable.
// Objects are created using curly braces {}.
// Objects can contain any data type, including numbers, strings, and arrays.
// Objects can be accessed using dot notation . or bracket notation [].

// Example of an object
const friendo = {
	name: 'Alice',
	age: 30,
	hobbies: ['reading', 'cooking'],
};

// Example of accessing an object property
console.log(friendo.name); // Prints 'Alice'

// Example of changing an object property

friendo.name = 'Bob';
console.log(friendo.name); // Prints 'Bob'

// Example of adding a property to an object
friendo.height = 180;
console.log(friendo.height); // Prints 180

// Example of removing a property from an object
delete friendo.height;
console.log(friendo.height); // Prints 'undefined'

// Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects".

// Creating a simple object with methods
let dog = {
	name: 'Buddy',
	breed: 'Golden Retriever',
	describe() {
		return `${this.name} is a ${this.breed}`;
	},
};
console.log(dog.describe());

// Wait, what the heck is 'this'?
// 'this' is a keyword that refers to the current object.
// In the example above, 'this' refers to the 'dog' object.

// CHALLENGES

// CHALLENGE 1: Create an object
// Create an object 'car' with properties 'make', 'model', and a method 'display' that returns a string combining make and model.
// TODO: Create the 'car' object here.

// CHALLENGE 2: Add a method to an object
// Add a method 'getAge' to the 'person' object that returns the person's age.
let person = {
	name: 'Alice',
	birthYear: 1995,
	// TODO: Add the 'getAge' method here.
};

// CHALLENGE 3: Fix the method
// The method 'greet' should print "Hello, my name is [name]". Fix it to correctly use the 'this' keyword.
let user = {
	name: 'Bob',
	greet() {
		// TODO: Fix the line below to correctly use 'this'
		return 'Hello, my name is ' + name;
	},
};

console.log('End of Object-Oriented Programming');

module.exports = {
	car,
	person,
	user,
};

// To run this JavaScript file, use the command 'node 08_ObjectOrientedProgramming.js' in your terminal.

// ✅ REMOVE THIS LINE to check your work
