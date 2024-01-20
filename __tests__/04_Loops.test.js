const {
	forLoopFunction,
	whileLoopFunction,
	doWhileLoopFunction,
	numbers,
	letters,
	words,
} = require('../04_Loops');

describe('Arrays Tests', () => {
	test('numbers should be an array of numbers', () => {
		expect(Array.isArray(numbers)).toBe(true);
		expect(numbers).toEqual([1, 2, 3, 4, 5]);
	});

	test('words should be an array of strings', () => {
		expect(Array.isArray(words)).toBe(true);
		expect(words).toEqual(['JavaScript', 'is', 'fun']);
	});

	test('letters should be an array of strings', () => {
		expect(Array.isArray(letters)).toBe(true);
		expect(letters).toEqual(['a', 'b', 'c', 'd', 'e']);
	});
});

describe('Loops Tests', () => {
	test('for loop should print numbers from 0 to 4', () => {
		expect(forLoopFunction()).toEqual([0, 1, 2, 3, 4]);
	});

	test('while loop should print "JavaScript is fun!" 3 times', () => {
		expect(whileLoopFunction()).toEqual([
			'JavaScript is fun!',
			'JavaScript is fun!',
			'JavaScript is fun!',
		]);
	});

	test('do-while loop should not run if num is 6', () => {
		expect(doWhileLoopFunction(6)).toEqual([]);
		expect(doWhileLoopFunction(4)).toContain('Number is less than 5');
	});
});
