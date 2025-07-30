const [a, b, v] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let result = Math.ceil((v - b) / (a - b));
console.log(result);