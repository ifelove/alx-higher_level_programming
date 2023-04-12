#!/usr/bin/node
const dict = require('./101-data').dict;
const key = Object.keys(dict);
const value = Object.values(dict);
let theSame;
const sorted = {};
for (let i = 0; i < value.length; i++) {
  sorted[JSON.stringify(value[i])] = [];
  theSame = key.filter(key => dict[key] === value[i]);
  theSame.forEach(item => sorted[JSON.stringify(value[i])].push(item));
}
console.log(sorted);
