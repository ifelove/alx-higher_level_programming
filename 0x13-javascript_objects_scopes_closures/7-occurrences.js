#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  let nOccurrences = 0;
  for (let i = 0; i < randomArray.length; i++) {
    if (searchElement === randomArray[i]) {
      nOccurrences++;
    }
  }
  return nOccurrences;
};
