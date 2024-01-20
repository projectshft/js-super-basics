const { age, day } = require('../03_ControlStructures');

describe('Conditional Statements Tests', () => {
	test('age should correctly determine "Adult" or "Minor"', () => {
		expect(age(16)).toBe('Minor');
		expect(age(18)).toBe('Adult');
		expect(age(30)).toBe('Adult');
	});

	test('day should correctly identify "Wednesday"', () => {
		expect(day('Monday')).toBe("It's Monday");
		expect(day('Wednesday')).toBe("It's Wednesday");
		expect(day('Friday')).toBe('Some other day');
	});
});
