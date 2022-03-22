const argv = require('./config/yargs');

const { multiply } = require('./libs/multiply');

console.clear();

const { b, l, m } = argv;

multiply({ base: b, list: l, multiplier: m })
	.then((res) => console.log(res.yellow, 'created'.green))
	.catch((err) => console.log(err));
