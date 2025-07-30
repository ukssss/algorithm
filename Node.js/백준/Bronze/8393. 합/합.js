const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const num = Number(input);
let ans = 0;

for (let i = 1; i < num + 1; i++) {
  ans += i;
}

console.log(ans);