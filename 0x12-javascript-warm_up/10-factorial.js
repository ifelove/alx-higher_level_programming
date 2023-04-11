#!/usr/bin/node
function factorial (x) {
  if (x < 0) {
    return (-1);
  }
  if (x === 0 || isNaN(n)) {
    return (1);
  }
  return (x * factorial(x - 1));
}

console.log(factorial(parseInt(process.argv[2])));