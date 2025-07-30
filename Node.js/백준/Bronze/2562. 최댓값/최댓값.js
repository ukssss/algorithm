const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

let max = input[0];
let n = 0;

for (let i = 0; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    n = i;
  }
}

console.log(max);
console.log(n+1);