const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

let map = new Map();

for (let i = 0; i < input.length; i++) {
  map.set(input[i], 1);
}

for (let i = 0; i < 30; i++) {
  if (!map.has(i + 1)) {
    console.log(i + 1);
  }
}