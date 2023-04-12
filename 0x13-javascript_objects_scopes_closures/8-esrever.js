#!/usr/bin/node
exports.esrever = function (list) {
  let size = list.length - 1;
  let i = 0;
  while ((size - i) > 0) {
    const temp = list[size];
    list[size] = list[i];
    list[i] = temp;
    i++;
    size--;
  }
  return list;
};
