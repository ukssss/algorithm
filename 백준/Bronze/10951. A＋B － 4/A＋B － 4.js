const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let testCase = input[i].split(" ");
  console.log(Number(testCase[0]) + Number(testCase[1]));
}