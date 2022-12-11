const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
const d = parseInt(input[3]);
const e = parseInt(input[4]);
const f = parseInt(input[5]);
console.log(1 - a, 1 - b, 2 - c, 2 - d, 2 - e, 8 - f);