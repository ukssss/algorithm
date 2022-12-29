const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const row = Number(input);

for (let i = 0; i < row; i++) {
  let answer = "";
  for (let j = row - 1; j >= 0; j--) {
    answer += i >= j ? "*" : " ";
  }
  console.log(answer);
}
