// Introduction to JavaScript
// Lesson 2: Variables and Basic Data Types

// A variable in JavaScript is a container for storing data values.
// JavaScript uses 'let', 'const', and 'var' for variable declarations.

// CHALLENGE AND LEARNING SECTION

// In this section, we have a mix of explanations and challenges.
// Some lines are correct, and others need fixing or completing.

// 1. 'let' allows you to declare variables that can change.
let message = 'Welcome to JavaScript';
console.log(message); // Correct Usage

message = 'Hello, JavaScript!'; // Correct Usage

// 2. 'var' is an older way of declaring variables.
var name = 'Alice'; // Correct Usage
name = 'Bob'; // Correct Usage
name = 'Charlie'; // Correct Usage

// 3. 'const' is used for variables that should not change.
const earthGravity = 9.8; // Correct Usage

//uncomment the line below to see the error ❌
// earthGravity = 9.81;

// Now, let's fix some issues and complete the challenges:

// CHALLENGE 1: Fix the variable declaration
// Below, 'pi' should be a constant.
let pi = 3.14; // TODO: Change this line to correctly declare 'pi' as a constant.

// to see the error ❌ uncomment the line below
// pi = 3.14159;
// now comment the line above again ✅

// CHALLENGE 2: Correct the data type
// The 'age' variable should be a number, not a string.
let age = '30'; // TODO: Fix the data type of 'age'.

// CHALLENGE 3: Declare the missing variable
// You need to declare a variable named 'greeting' that holds the string "Hello, JavaScript!".
// TODO: Declare the 'greeting' variable and assign the correct string to it.

console.log(pi);
console.log(age);
console.log(greeting);

module.exports = {
	pi,
	age,
	greeting,
};

// To run this JavaScript file, use the command 'node 02_Variables.js' in your terminal.

// ✅ REMOVE THIS LINE to check your work
