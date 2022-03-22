const argv = require('yargs')
	.options({
		b: {
			alias: 'base',
			type: 'number',
			demandOption: true,
			describe: 'Multiply base number',
		},
		m: {
			alias: 'multiplier',
			type: 'number',
			default: 10,
			describe: 'Loopt to multiplier number',
		},
		l: {
			alias: 'list',
			type: 'boolean',
			default: false,
			describe: 'Show table for base number',
		},
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) throw 'Base argument must be a number';
		return true;
	}).argv;

module.exports = argv;
