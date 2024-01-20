// Introduction to JavaScript
// Lesson 9: The FizzBuzz Challenge

// FizzBuzz is a classic programming challenge used in interviews.
// The task is simple: Print numbers from 1 to 100.
// For multiples of 3, print "Fizz" instead of the number.
// For multiples of 5, print "Buzz".
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

// Example of the FizzBuzz solution
for (let i = 1; i <= 100; i++) {
	let output = '';
	if (i % 3 === 0) output += 'Fizz';
	if (i % 5 === 0) output += 'Buzz';
	console.log(output || i);
}

// CHALLENGES

// CHALLENGE: Write Your Own FizzBuzz
// Now, it's your turn to write the FizzBuzz program from scratch.
// TODO: Write your FizzBuzz solution below.

// To run this JavaScript file, use the command 'node 09_FizzBuzz.js' in your terminal.

// ✅ REMOVE THIS LINE to check your work
