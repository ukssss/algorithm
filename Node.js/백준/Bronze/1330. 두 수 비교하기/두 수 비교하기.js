const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const arr = input.map(Number);
if (arr[0] > arr[1]) {
  console.log(">");
} else if (arr[0] < arr[1]) {
  console.log("<");
} else console.log("==");