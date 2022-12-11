const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const a = parseInt(input);

if (a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0)) {
  console.log(1);
} else console.log(0);