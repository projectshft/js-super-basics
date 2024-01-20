const { pi, age, greeting } = require('../02_Variables');

test('age should be a number', () => {
	expect(typeof age).toBe('number');
});

test('greeting should be a string and say "Hello, JavaScript!"', () => {
	expect(greeting).toBe('Hello, JavaScript!');
});
