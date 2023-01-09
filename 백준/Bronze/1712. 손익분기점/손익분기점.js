const [a, b, c] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let margin = c - b;
let breakevenPoint = Math.floor(a / margin) + 1;

console.log(margin <= 0 ? -1 : breakevenPoint);