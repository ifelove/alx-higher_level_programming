#!/usr/bin/node
const { readFileSync, writeFile } = require('fs');
const { argv } = require('process');
const theFile = (file) => {
  return readFileSync(file, 'utf8');
};
const joined = theFile(argv[2]) + '' + theFile(argv[3]);
writeFile(argv[4], joined, 'utf8', err => {
  if (err) throw err;
});
