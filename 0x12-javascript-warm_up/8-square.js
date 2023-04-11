#!/usr/bin/node
let square=''
if (process.argv[2] === undefined || isNaN(process.argv[2])) {
  console.log('Missing size');
} else {
  const x = parseInt(process.argv[2]);
  for(let i = 0; i < x; i++) {
	  for(let j = 0; j < x; j++) {
		   square += "*  "
	  }
	   square += "\n";
  }
	console.log(square)
}
