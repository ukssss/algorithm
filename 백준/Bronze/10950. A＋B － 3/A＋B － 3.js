const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);

for (let i = 1; i < num + 1; i++) {
  let add = input[i].trim().split(" ");
  console.log(Number(add[0]) + Number(add[1]));
}