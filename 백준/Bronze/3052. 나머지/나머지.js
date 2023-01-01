const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

let remain = [];

input.forEach((x) => {
  const num = x % 42;

  if (remain.indexOf(num) === -1) {
    remain.push(num);
  }
});

console.log(remain.length);