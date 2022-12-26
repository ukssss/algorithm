const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [h, m] = input[0].trim().split(" ");
const add = parseInt(input[1]);

h = parseInt(h);
m = parseInt(m) + add;

while (m >= 60) {
  h += 1;
  m -= 60;
  if (h >= 24) {
    h = 0;
  }
}

console.log(h, m);