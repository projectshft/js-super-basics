const fizzBuzz = require('../09_FizzBuzzChallenge');

describe('FizzBuzz Challenge Tests', () => {
	test('FizzBuzz should correctly implement the FizzBuzz logic', () => {
		const expected = [
			1,
			2,
			'Fizz',
			4,
			'Buzz',
			'Fizz',
			7,
			8,
			'Fizz',
			'Buzz',
			11,
			'Fizz',
			13,
			14,
			'FizzBuzz' /* ... continue up to 100 */,
		];

		expect(fizzBuzz()).toEqual(expected);
	});
});
