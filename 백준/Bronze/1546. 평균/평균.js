const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);
const subject = input[1].split(" ");
const max = Math.max(...subject);
let sum = 0;

for (let i = 0; i < num; i++) {
  sum += (subject[i] / max) * 100;
}

console.log(sum / num);