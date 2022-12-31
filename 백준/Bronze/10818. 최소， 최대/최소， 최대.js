const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input[1].split(" ").map((x) => Number(x));
let max = Math.max.apply(null, arr);
let min = Math.min.apply(null, arr);

console.log(min, max);