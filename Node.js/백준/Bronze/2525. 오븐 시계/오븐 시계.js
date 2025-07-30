const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [h, m] = input[0].trim().split(" ").map(Number);
m += Number(input[1]);

while (m >= 60) {
  h += 1;
  m -= 60;
  if (h >= 24) {
    h = 0;
  }
}

console.log(h, m);