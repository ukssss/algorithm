const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let avg = input.reduce((arr, cur) => (arr += cur)) / input.length;
let med = input.sort((a, b) => a - b)[Math.floor(input.length / 2)];

console.log(avg);
console.log(med);