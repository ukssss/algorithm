const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let length = Number(input[0]);
let arr = input[1].split(" ");
let num = Number(input[2]);
let cnt = 0;

for (let i = 0; i < length; i++) {
  num === Number(arr[i]) ? cnt++ : "";
}

console.log(cnt);