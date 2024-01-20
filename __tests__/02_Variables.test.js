const { pi, age, greeting } = require('../02_Variables');

test('pi should be a constant', () => {
	// Check if 'pi' is declared using 'const'
	// Attempt to reassign 'pi' and expect an error
	const desc = Object.getOwnPropertyDescriptor(variables, 'pi');
	expect(desc.writable).toBe(false);
	expect(desc.configurable).toBe(false);
});

test('age should be a number', () => {
	expect(typeof age).toBe('number');
});

test('greeting should be a string and say "Hello, JavaScript!"', () => {
	expect(greeting).toBe('Hello, JavaScript!');
});
