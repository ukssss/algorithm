const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const types = Number(input[0]);

for (let i = 1; i < 1 + types; i++) {
  let num = input[i].split(" ");
  console.log(`Case #${i}: ${Number(num[0]) + Number(num[1])}`);
}