const argv = require('yargs')
	.options({
		b: {
			alias: 'base',
			type: 'number',
			demandOption: true,
			describe: 'Base number to multiply',
		},
		m: {
			alias: 'multiplier',
			type: 'number',
			default: 10,
			describe: 'Loop to multiplier number',
		},
		l: {
			alias: 'list',
			type: 'boolean',
			default: false,
			describe: 'Display table for base number',
		},
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) throw 'Base argument must be a number';
		return true;
	}).argv;

module.exports = argv;
