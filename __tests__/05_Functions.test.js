const { greetIncorrectly, multiply, subtract } = require('../05_Functions');

describe('Functions Tests', () => {
	test('greetIncorrectly should correctly greet a person', () => {
		expect(greetIncorrectly('Bob')).toBe('Hello, Bob');
	});

	test('multiply should correctly multiply two numbers', () => {
		expect(multiply(3, 4)).toBe(12);
		expect(multiply(5, 6)).toBe(30);
	});

	test('subtract should return the result of subtraction', () => {
		expect(subtract(10, 4)).toBe(6);
		expect(subtract(20, 5)).toBe(15);
	});
});
