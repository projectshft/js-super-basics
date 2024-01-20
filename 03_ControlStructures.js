// Introduction to JavaScript
// Lesson 3: Control Structures - Conditional Statements

// Conditional statements allow us to make decisions in our code by executing different code blocks based on certain conditions.

// The 'if-else' statement is one of the most common forms of control structures.

// Example of 'if-else'
let number = 10;
if (number > 0) {
	console.log('The number is positive');
} else {
	console.log('The number is not positive');
}

// Another control structure is the 'switch' statement, which is used for multiple conditions.

// Example of 'switch'
let color = 'blue';
switch (color) {
	case 'red':
		console.log('The color is red');
		break;
	case 'blue':
		console.log('The color is blue');
		break;
	default:
		console.log('Color not recognized');
}

// CHALLENGES

// CHALLENGE 1: Fix the 'if-else' statement
// The code below should print "Adult" if the age is 18 or over, and "Minor" if under 18.
let age = 16;
if (age >= 18) {
	console.log('Minor'); // TODO: This line is incorrect. Fix the output messages.
} else {
	console.log('Adult'); // TODO: This line is also incorrect.
}
// CHALLENGE 2: Complete the 'switch' statement
// Add a case in the switch statement for when the 'day' is "Wednesday".
let day = 'Wednesday';
switch (day) {
	case 'Monday':
		console.log("It's Monday");
		break;
	// TODO: Add a case here for "Wednesday".
	default:
		console.log('Some other day');
}

console.log(age);
console.log(day);

module.exports = {
	age,
	day,
};

// To run this JavaScript file, use the command 'node 03_ControlStructures.js' in your terminal.

// ✅ REMOVE THIS LINE to check your work
