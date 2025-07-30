const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);
const cont = ["O"];

for (let i = 0; i < num; i++) {
  let score = input[i + 1].split("");
  let total = 0;
  let status = 0;
  for (let j = 0; j < score.length; j++) {
    if (cont.indexOf(score[j]) !== -1) {
      status++;
      total += status;
    } else status = 0;
  }
  console.log(total);
}