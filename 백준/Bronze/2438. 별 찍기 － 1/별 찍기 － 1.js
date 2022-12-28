const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const row = Number(input);
let answer = "";

for (let i = 1; i < 1 + row; i++) {
  for (let j = 1; j < 1 + row; j++) {
    i >= j ? (answer += "*") : " ";
  }
  answer += "\n";
}

console.log(answer);