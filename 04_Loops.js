// Introduction to JavaScript
// Lesson 4: Loops and Arrays

// Arrays are used to store multiple values in a single variable.
// Arrays are created using square brackets [].
// Arrays can contain any data type, including numbers, strings, and objects.
// Arrays can be accessed using bracket notation [].

// Example of an array
const fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

// Example of accessing an array element
console.log(fruits[0]); // Prints 'Apple'

// Example of changing an array element
fruits[0] = 'Apricot';
console.log(fruits[0]); // Prints 'Apricot'

// Example of adding an element to an array
fruits.push('Fig');
console.log(fruits[5]); // Prints 'Fig'

// Example of removing an element from an array
fruits.pop();
console.log(fruits[5]); // Prints 'undefined'

// Example of getting the length of an array
console.log(fruits.length); // Prints 5

// CHALLENGES

// CHALLENGE 1: Correct the array
// The array below should contain the numbers 1 to 5.
const numbers = [1, 2, 3, 4, 5, 6]; // TODO: Fix the array to contain the numbers 1 to 5.

// CHALLENGE 2: Correct the array
// The array below should contain the strings "JavaScript", "is", "fun".
const words = ['JavaScript', 'is', 'fun', 'and', 'easy']; // TODO: Fix the array to contain the strings "JavaScript", "is", "fun".

// CHALLENGE 3: Correct the array
const letters = []; // TODO: Fix the array to contain the letters "a" to "e".

module.exports = {
	numbers,
	words,
	letters,
};

// Loops are used in programming to repeat a specific block of code.
// In JavaScript, there are several types of loops, including 'for', 'while', and 'do-while'.

// Example of a 'for' loop
for (let i = 0; i < 5; i++) {
	console.log(i);
}

// Example of a 'while' loop
let j = 0;
while (j < 5) {
	console.log(j);
	j++;
}

// Example of a 'do-while' loop
let k = 0;
do {
	console.log(k);
	k++;
} while (k < 5);

// CHALLENGES

// CHALLENGE 1: Correct the 'for' loop
// The loop below should print numbers from 0 to 4.
for (let i = 0; i <= 5; i++) {
	console.log(i); // TODO: Fix the condition to print numbers from 0 to 4.
}

// CHALLENGE 2: Complete the 'while' loop
// Write a while loop that prints "JavaScript is fun!" 3 times.
// TODO: Write the while loop here.

// CHALLENGE 3: Fix the 'do-while' loop
// The loop below should only execute if 'num' is less than 5.
let num = 6;
do {
	console.log('Number is less than 5');
} while (num < 5); // TODO: Fix the loop to run only if 'num' is less than 5.

console.log('End of Loops');

module.exports = {
	forLoopFunction,
	whileLoopFunction,
	doWhileLoopFunction,
};

// To run this JavaScript file, use the command 'node 04_Loops.js' in your terminal.

// ✅ REMOVE THIS LINE to check your work
