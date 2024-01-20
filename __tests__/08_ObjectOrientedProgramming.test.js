const { car, person, user } = require('../08_ObjectOrientedProgramming');

describe('Object-Oriented Programming Tests', () => {
	test('car object should have correct display method', () => {
		expect(car.display()).toBe('Make Model'); // Replace "Make Model" with actual values
	});

	test('person object should correctly calculate age', () => {
		// Assuming the current year is 2024 for this test
		expect(person.getAge()).toBe(29);
	});

	test('user.greet method should correctly use the "this" keyword', () => {
		expect(user.greet()).toBe('Hello, my name is Bob');
	});
});
