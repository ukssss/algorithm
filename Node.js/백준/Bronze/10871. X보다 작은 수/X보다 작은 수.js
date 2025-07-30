const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, x] = input[0].split(" ");
let arr = input[1].split(" ");
let result = "";

for (let i = 0; i < Number(n); i++) {
  result += Number(arr[i]) < Number(x) ? arr[i] + " " : "";
}

console.log(result);