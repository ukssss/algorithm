const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const total = input[1]
  .split("")
  .map(Number)
  .reduce((prev, curr) => prev + curr);
console.log(total);