const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let [x, y, z] = input.map(Number);
let price = 0;

if (x === y && y === z) {
  price = 10000 + x * 1000;
} else if (x === y || x === z) {
  price = 1000 + x * 100;
} else if (y === z || y === x) {
  price = 1000 + y * 100;
} else {
  price = Math.max(x, y, z) * 100;
}

console.log(price);