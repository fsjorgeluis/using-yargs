const { multiply } = require('../src/libs/multiply');

describe('multiply', () => {
	test('should return a string with the file name', async () => {
		const data = await multiply({ base: 2, multiplier: 10, list: true });
		expect(data).toBe('tabla-2.txt');
	});
});
