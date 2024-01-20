const {
	describePerson,
	showFavoriteColor,
	multiplier,
} = require('../06_Parameters_Returns');

describe('Advanced Functions Tests', () => {
	test('describePerson should correctly describe a person', () => {
		expect(describePerson('Alice', 30, 'Developer')).toBe(
			'Alice is a 30 year old Developer'
		);
		expect(describePerson('Bob', 25, 'Designer')).toBe(
			'Bob is a 25 year old Designer'
		);
	});

	test('showFavoriteColor should correctly display the favorite color', () => {
		expect(showFavoriteColor()).toBe('Favorite color is: Blue');
	});

	test('multiplier function should return a functional multiplier', () => {
		const double = multiplier(2);
		const triple = multiplier(3);
		expect(double(5)).toBe(10);
		expect(triple(5)).toBe(15);
	});
});
