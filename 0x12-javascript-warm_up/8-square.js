#!/usr/bin/node
if (process.argv[2] === undefined || isNaN(process.argv[2])) {
	console.log('Missing size');
	const x = parseInt(process.argv[2])
} else {
	const x = parseInt(process.argv[2])
	for (let i = 0; i < x; i++) {
		let square = '';
		for (let j = 0; j < x; j++) square += 'X';
		console.log(square);
	}
}
