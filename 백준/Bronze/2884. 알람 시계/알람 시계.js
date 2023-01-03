const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((x) => Number(x));

let hour = input[0];
let min = input[1];

if (min - 45 < 0) {
  if (hour === 0) {
    hour = 23;
  } else hour -= 1;
  min = 60 + (min - 45);
} else min -= 45;

console.log(hour, min);