const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = input.shift();

let answer = 0;

input.forEach((item) => {
  let temp = "";
  temp += item[0];
  for (let i = 1; i < item.length; i++) {
    if (temp.includes(item[i]) && item[i - 1] !== item[i]) {
      break;
    }
    temp += item[i];
  }

  if (temp.length === item.length) answer++;
});

console.log(answer);