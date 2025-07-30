const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

let arr = [];

for (let i = 1; i < 31; i++) {
  arr.push(i);
}

let diff = arr.filter((x) => input.indexOf(x) === -1);

while (diff.length) {
  console.log(diff.shift());
}