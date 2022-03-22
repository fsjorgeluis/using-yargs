const fs = require('fs');
const colors = require('colors');

const multiply = async ({ base = 5, multiplier = 10, list = false }) => {
	let output = '';
	let display = '';

	output += `===================\n    TABLA DEL ${base}\n===================\n`;

	display += `===================\n    TABLA DEL ${colors.green(
		base
	)}\n===================\n`;

	for (let i = 1; i <= multiplier; i++) {
		output += `${base} x ${i} = ${base * i}\n`;
	}

	if (list) console.log(output);

	try {
		const file = fs.writeFileSync(`./output/tabla-${base}.txt`, output);
		if (file === undefined) return `tabla-${base}.txt`;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	multiply,
};
