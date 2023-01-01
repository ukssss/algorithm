const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let cnt = input[0];
let subject = input[1].split(" ").map((x) => Number(x));
let max = Math.max.apply(null, subject);
let edit = [];

subject.forEach((x) => {
  const num = (x / max) * 100;
  edit.push(num);
});

const total = edit.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);

const avg = total / edit.length;
console.log(avg);