const { colors, employee, getJob } = require('../07_AdvancedDataTypes');

describe('Advanced Data Types Tests', () => {
	test('colors array should have "Yellow" corrected', () => {
		expect(colors.includes('Yellow')).toBeTruthy();
		expect(colors.includes('Yello')).toBeFalsy();
	});

	test('employee object should have a salary key', () => {
		expect(employee.salary).toBe(50000);
	});

	test('getJob function should return the job from an object', () => {
		const testPerson = { name: 'Alice', job: 'Developer' };
		expect(getJob(testPerson)).toBe('Developer');
	});
});
